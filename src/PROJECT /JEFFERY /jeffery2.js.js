// Select the fish-one image
const fishOne = document.querySelector(".fish-one");

// Add styles to make the image look clickable
fishOne.style.cursor = "pointer";

// Add an event listener to navigate to page6.html when the fish-one is clicked
fishOne.addEventListener("click", () => {
    window.location.href = "page6.html";
});
