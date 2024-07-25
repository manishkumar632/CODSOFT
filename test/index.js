function setProgress(percentage) {
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = percentage + "%";
}

// Example usage
setProgress(30); // Set the progress bar to 50%
