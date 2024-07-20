document.addEventListener("DOMContentLoaded", function() {
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

document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("data/data.json");
    const template = await fetch("components/testimonialCard.html");
    const data = await response.json();
    const templateText = await template.text();

    for (const id in data) {
        if (data.hasOwnProperty(id)) {
            const person = data[id];
            const card = await createCard(person, templateText);
            const cardDiv = document.createElement("div");
            cardDiv.className = "testimonials-card";
            cardDiv.innerHTML = card;
            document.querySelector(".testimonials-cards").appendChild(cardDiv);
        }
    }
    const cards = document.querySelectorAll(".testimonials-card-content");
    cards.forEach(card => {
        card.addEventListener("mouseover", addCss);
        card.addEventListener("mouseleave", removeCss);
    });
});

async function createCard(person, templateText) {
    templateText = templateText
        .replace("testimonialdescription", person.description)
        .replace("testimonialName", person.name)
        .replace("testimonialDesignation", person.designation)
        .replace("stars", person.rating)
        .replace("imagesrc", person.image);
    return templateText;
}

document.addEventListener("DOMContentLoaded", function() {
    let animating = false;
    const leftBtn = document.querySelector(".testimonials-button.left");
    const rightBtn = document.querySelector(".testimonials-button.right");

    leftBtn.addEventListener("click", function() {
        if (animating) {
            return;
        }
        animating = true;
        const cards = document.querySelector(".testimonials-card");
        const firstCard = cards.cloneNode(true);
        setTimeout(() => {
            document.querySelector(".testimonials-card").style.animation = "slideLeft 1s ease forwards";
            document
                .querySelector(".testimonials-card")
                .addEventListener(
                    "animationend",
                    () => {
                        const firstChild =
                            testimonialsContainer.firstElementChild;
                        if (firstChild) {
                            firstChild.remove();
                        }
                        animating = false;
                    },
                    { once: true }
                );
            const testimonialsContainer = document.querySelector(".testimonials-cards");
            testimonialsContainer.appendChild(firstCard);
        }, 10);
    });

    rightBtn.addEventListener("click", function() {
        if (animating) {
            return;
        }
        animating = true;
        const cards = document.querySelectorAll(".testimonials-card");
        const lastCard = cards[cards.length - 1].cloneNode(true);
        const lastCardClone = lastCard;
        setTimeout(() => {
            lastCard.style.animation = "slideRight 1s ease forwards";
            lastCard.addEventListener(
                "animationend",
                () => {
                    const lastChild = testimonialsContainer.lastElementChild;
                    if (lastChild) {
                        lastChild.remove();
                    }
                    animating = false;
                },
                { once: true }
            );
            const testimonialsContainer = document.querySelector(".testimonials-cards");
            testimonialsContainer.insertBefore(lastCardClone, testimonialsContainer.firstChild);
        }, 10);
    });
});
