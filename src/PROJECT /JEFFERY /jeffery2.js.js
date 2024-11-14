// Select the fish-one image
const slantarrow = document.querySelector(".slantarrow");

// Add styles to make the image look clickable
slantarrow.style.cursor = "pointer";

// Add an event listener to navigate to page6.html when the fish-one is clicked
slantarrow.addEventListener("click", () => {
    window.location.href = "page7.html";
});
