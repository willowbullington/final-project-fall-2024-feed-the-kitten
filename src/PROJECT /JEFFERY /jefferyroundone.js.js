// Select the correct-fish image
const correctfish = document.getElementById("f");

// Add styles to make the image look clickable
correctFish.style.cursor = "pointer";

// Add an event listener to navigate to correct.html when the image is clicked
correctFish.addEventListener("click", () => {
    window.location.href = "correct.html";
});
