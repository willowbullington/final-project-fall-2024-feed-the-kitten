
// Add an event listener to navigate to correct.html when the image is clicked
bluefish.addEventListener("click", () => {
	window.location.href = "page101.html";
});

// Select the correct-fish image
const incorrect = document.getElementById("incorrect");

// Add styles to make the image look clickable
incorrect.cursor = "pointer";

// Add an event listener to navigate to correct.html when the image is clicked
incorrect.addEventListener("click", () => {
	window.location.href = "page91.html";
});
