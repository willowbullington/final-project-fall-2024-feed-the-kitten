// Select the correct-fish image
const bluefish = document.getElementById("bluefish");

// Add styles to make the image look clickable
bluefish.style.cursor = "pointer";

// Add an event listener to navigate to correct.html when the image is clicked
bluefish.addEventListener("click", () => {
    window.location.href = "page131.html";
});
