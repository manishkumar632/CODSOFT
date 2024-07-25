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
    const response = await fetch("./data/data.json");
    const template = await fetch("./components/testimonialCard.html");
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
    const starIcon = "&#9733;";
    const maxRating = 5;
    let starsHtml = "";

    for (let i = 1; i <= maxRating; i++) {
        if (i <= person.rating) {
            starsHtml += `<span style="color: #FF7F46; font-size: 32px;">${starIcon}</span>`;
        } else {
            starsHtml += `<span style="font-size: 32px;">${starIcon}</span>`;
        }
    }
    templateText = templateText
        .replace("testimonialdescription", person.description)
        .replace("testimonialName", person.name)
        .replace("testimonialDesignation", person.designation)
        .replace("stars", starsHtml)
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
            document.querySelector(".testimonials-card").style.animation =
                "slideLeft 1s ease forwards";
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
            const testimonialsContainer = document.querySelector(
                ".testimonials-cards"
            );
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
            const testimonialsContainer = document.querySelector(
                ".testimonials-cards"
            );
            testimonialsContainer.insertBefore(
                lastCardClone,
                testimonialsContainer.firstChild
            );
        }, 10);
    });
});

window.addEventListener("resize", handleResize);

const map = new Map();
map.set(1024, false);
map.set(768, false);
map.set("greaterThan1024", false);

let initialWidth = window.innerWidth;
function handleResize() {
    const studyOffFlexibly = document.querySelector(".study-off-flexibly");
    let textDiv = document.querySelectorAll(".study-off-flexibly-text");
    let readMoreBtn = document
        .querySelector(".study-off-flexibly-readmoreBtn")
        .cloneNode(true);
    const textDivClone = textDiv[0].cloneNode(true);
    if (window.innerWidth <= 1024 && !map.get(1024)) {
        initialWidth = window.innerWidth;
        const newDiv = document.createElement("div");
        newDiv.appendChild(textDivClone);
        newDiv.appendChild(readMoreBtn);
        studyOffFlexibly.removeChild(studyOffFlexibly.lastElementChild);
        studyOffFlexibly.removeChild(studyOffFlexibly.lastElementChild);
        studyOffFlexibly.appendChild(newDiv);
        map.set(1024, true);
        map.set("greaterThan1024", false);
        map.set(768, false);
    }
    if (window.innerWidth <= 768 && !map.get(768)) {
        initialWidth = window.innerWidth;
        studyOffFlexibly.removeChild(studyOffFlexibly.lastChild);
        studyOffFlexibly.appendChild(textDivClone);
        studyOffFlexibly.appendChild(readMoreBtn);
        map.set(768, true);
        map.set("greaterThan1024", false);
        map.set(1024, false);
    }
    if (window.innerWidth > 1024 && !map.get("greaterThan1024")) {
        if (initialWidth > 1024) return;
        studyOffFlexibly.removeChild(studyOffFlexibly.lastChild);
        studyOffFlexibly.appendChild(textDivClone);
        studyOffFlexibly.appendChild(readMoreBtn);
        map.set("greaterThan1024", true);
        map.set(1024, false);
        map.set(768, false);
        textDiv = document.querySelectorAll(".study-off-flexibly-text");
        readMoreBtn = document.querySelectorAll(
            ".study-off-flexibly-readmoreBtn"
        );
        if (textDiv.length > 1) {
            textDiv[0].remove();
        }
        if (readMoreBtn.length > 1) {
            readMoreBtn[0].remove();
        }
    }
}
