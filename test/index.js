// resizable circle

const circle = document.querySelector(".circle");
const resizable = document.querySelector(".resizable");

resizable.addEventListener("mousedown", (event) => {
    const circle = event.target;
    const circleRect = circle.getBoundingClientRect();
    const circleX = circleRect.left + circleRect.width / 2;
    const circleY = circleRect.top + circleRect.height / 2;

    const onMouseMove = (event) => {
        const dx = event.clientX - circleX;
        const dy = event.clientY - circleY;
        circle.style.left = `${circleX + dx}px`;
        circle.style.top = `${circleY + dy}px`;
    };

    document.addEventListener("mousemove", onMouseMove);

    resizable.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onMouseMove);
    });
})