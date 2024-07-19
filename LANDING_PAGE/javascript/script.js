document.addEventListener("DOMContentLoaded", function () {
    let isAnimating = false;

    function slide() {
        if (isAnimating) return;

        const sliderCard = document.querySelector(".sliderCard");
        if (sliderCard) {
            isAnimating = true;
            let copySliderCard = sliderCard.cloneNode(true);
            setTimeout(() => {
                sliderCard.style.animation = "shrink 1s ease forwards";
                sliderCard.addEventListener("animationend", () => {
                    sliderCard.remove();
                    isAnimating = false;
                });
                document.querySelector(".slider").appendChild(copySliderCard);
            }, 1000);
        }
    }

    setInterval(slide, 1000);
});

function addCss(event) {
    const card = event.target.parentElement;
    const circle = card.querySelector(".testimonials-card-circle");
    const text = card.querySelector(".testimonials-card-circle h1");
    circle.style.backgroundColor = "#FF7F46";
    text.style.color = "white";
}

function removeCss(event) {
    const card = event.target.parentElement;
    const circle = card.querySelector(".testimonials-card-circle");
    const text = card.querySelector(".testimonials-card-circle h1");
    circle.style.backgroundColor = "white";
    text.style.color = "#FF7F46";
}

document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("javascript/data.json");
    const data = await response.json();

    for (const id in data) {
        if (data.hasOwnProperty(id)) {
            const person = data[id];
            const card = await createCard(person);
            document.querySelector(".testimonials-cards").appendChild(card);
        }
    }
    const cards = document.querySelectorAll(".testimonials-card");
    cards.forEach((card) => {
        card.addEventListener("mouseover", addCss);
        card.addEventListener("mouseleave", removeCss);
    });
});

async function createCard(person) {
    const html = await fetch("components/testimonialCard.html");
    const text = await html.text();
    const card = document.createElement("div");
    card.innerHTML = text;
    card.querySelector(".testimonials-card-description").innerHTML =
        person.description;
    card.querySelector(".testimonials-card-name").innerHTML = person.name;
    card.querySelector("img").src = person.image;
    card.querySelector("img").alt = person.name;
    card.querySelector(".testimonials-card-designation").innerHTML =
    person.designation;
    const rating = card.querySelector(".testimonials-card-rating");
    for (let i = 0; i < person.rating; i++) {
        rating.innerHTML +=
            '<i class="fas fa-star" style="color: #FF7F46"></i>';
    }
    for (let i = 0; i < 5 - person.rating; i++) {
        rating.innerHTML += '<i class="far fa-star"></i>';
    }
    return card;
}
