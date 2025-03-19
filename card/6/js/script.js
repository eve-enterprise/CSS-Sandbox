// Fichier JavaScript principal
document.addEventListener("DOMContentLoaded", function() {
	const svgCircles = document.querySelectorAll("svg circle");
	svgCircles.forEach((circle, index) => {
		// Add cx and cy attributes randome from 10% to 90%
		circle.setAttribute("cx", Math.floor(Math.random() * 80 + 10) + "%");
		circle.setAttribute("cy", Math.floor(Math.random() * 80 + 10) + "%");
	});
});
