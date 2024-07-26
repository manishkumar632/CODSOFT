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

document.addEventListener('DOMContentLoaded', function () {
    const btech = document.querySelector(`.btech`);
    const school = document.querySelector(`.school`);
    if (btech && school) {
        let btechHeight = btech.clientHeight;
        let schoolHeight = school.clientHeight;
        const timeline1 = document.querySelector(`.timeline1`);
        const timeline2 = document.querySelector(`.timeline2`);
        if (timeline1 && timeline2) {
            timeline1.style.height = `${btechHeight + 32}px`;
            timeline2.style.height = `${schoolHeight - 30}px`;
        }
    }
})
window.addEventListener("resize", function() {
    const btech = document.querySelector(`.btech`);
    const school = document.querySelector(`.school`);
    if (btech && school) {
        let btechHeight = btech.clientHeight;
        let schoolHeight = school.clientHeight;
        const timeline1 = document.querySelector(`.timeline1`);
        const timeline2 = document.querySelector(`.timeline2`);
        if (timeline1 && timeline2) {
            timeline1.style.height = `${btechHeight + 32}px`;
            timeline2.style.height = `${schoolHeight - 30}px`;
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const ele = document.querySelector(".sidebarMenu");
    ele.addEventListener("click", function() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display =
            sidebar.style.display === "none" ? "grid" : "none";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const ele = document.querySelector(".closeSideBar");
    ele.addEventListener("click", function() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display =
            sidebar.style.display === "grid" ? "none" : "grid";
    });
});
