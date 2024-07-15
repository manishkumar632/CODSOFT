const keys = document.querySelectorAll(".btn");

keys.forEach((key) => {
    key.addEventListener("click", () => {
        const input = document.querySelector(".getInput");
        if (input.value === "0") {
            input.value = "";
        }
        switch (key.value) {
            case "changeSign":
                input.value = String(input.value).replace(/x/g, "*");
                input.value = String(input.value).replace(/÷/g, "/");
                input.value = eval(input.value) * -1;
                break;
            case "clear":
                input.value = "0";
                break;
            case "=":
                input.value = String(input.value).replace(/x/g, "*");
                input.value = String(input.value).replace(/÷/g, "/");
                input.value = eval(input.value);
                break;
            default:
                input.value += key.value;
                break;
        }
    });
});


function getCurrentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let timeString = hours + ':' + minutes + ' ' + period;

    return timeString;
}

function displayCurrentTime() {
    let currentTime = getCurrentTime();
    let showTimeDiv = document.querySelector('.showTime');

    if (showTimeDiv) {
        showTimeDiv.textContent = currentTime;
    }
}
displayCurrentTime();
setInterval(displayCurrentTime, 60000);
