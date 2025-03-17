// Fichier JavaScript principal
document.addEventListener("DOMContentLoaded", function() {
	document.addEventListener("mousemove", (e) => {
		// Update style --mouse-x and --mouse-y of .cards > card elements. X and Y are in percentage.
		document.querySelectorAll(".card").forEach((card) => {
			const rect = card.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width * 100;
			const y = (e.clientY - rect.top) / rect.height * 100;
			card.style.setProperty("--mouse-x", x + "%");
			card.style.setProperty("--mouse-y", y + "%");
		});
	});
});
