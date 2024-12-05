// Select the correct-fish image
const correctfish = document.getElementById("correct-fish");

// Add styles to make the image look clickable

correctfish.style.cursor = "pointer";

// Add an event listener to navigate to correct.html when the image is clicked
correctfish.addEventListener("click", () => {
    window.location.href = "correct.html";
});
