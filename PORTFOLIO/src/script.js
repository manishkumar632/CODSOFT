const technology = ["Java", "Python", "Django", "Web", "React"];

document.addEventListener("DOMContentLoaded", function() {
    const div = document.getElementById("typingText");
    let isAnimating = false;

    async function typingText() {
        let index = 0;
        while (true) {
            if (isAnimating) continue;

            isAnimating = true;
            let length = 0;

            while (length <= technology[index].length) {
                div.textContent = technology[index].slice(0, length);
                length++;
                await delay(200);
            }

            await reverseTyping();
            index = (index + 1) % technology.length;
            isAnimating = false;
        }
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function reverseTyping() {
        const text = document.getElementById("typingText");
        let length = text.textContent.length;
        await delay(500);
        
        while (length > 0) {
            text.textContent = text.textContent.slice(0, -1);
            length--;
            await delay(200);
        }
    }

    typingText();
});
