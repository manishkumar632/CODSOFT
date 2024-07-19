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


const cards = document.querySelectorAll(".testimonials-card-description");
cards.forEach((card) => {
    card.addEventListener("mouseover", addCss);
    card.addEventListener("mouseleave", removeCss);
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