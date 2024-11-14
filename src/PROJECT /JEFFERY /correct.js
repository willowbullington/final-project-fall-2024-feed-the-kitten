// Function to redirect to another page after a delay
function redirectToPage() {
	setTimeout(function () {
		 window.location.href = ".html"; // Replace "success.html" with your target page
	}, 5000); // Delay of 5000ms (5 seconds)
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", redirectToPage);
