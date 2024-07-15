document.addEventListener("DOMContentLoaded", function () {
    let isAnimating = false;

    function slide() {
        if (isAnimating) return; // Exit if an animation is already in progress

        const sliderCard = document.querySelector(".sliderCard");
        if (sliderCard) {
            isAnimating = true; // Set the flag to true indicating the process has started

            let copySliderCard = sliderCard.cloneNode(true);
            setTimeout(() => {
                sliderCard.style.animation = "shrink 1s ease forwards";
                sliderCard.addEventListener("animationend", () => {
                    sliderCard.remove();
                    isAnimating = false; // Reset the flag after the animation ends and element is removed
                });
                document.querySelector(".slider").appendChild(copySliderCard);
            }, 1000);
        }
    }

    setInterval(slide, 1000);
});
