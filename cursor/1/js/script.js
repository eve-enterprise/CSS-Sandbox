// Fichier JavaScript principal
document.addEventListener("DOMContentLoaded", function() {
	document.addEventListener("mousemove", (e) => {
		const cursor = document.querySelector(".cursor");
		cursor.style.left = `${e.clientX}px`;
		cursor.style.top = `${e.clientY}px`;
	
		const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
	
		if (hoveredElement) {
			const ariaLabel = hoveredElement.getAttribute("aria-label");
			if (ariaLabel) {
				cursor.innerHTML = ariaLabel;
				cursor.style.scale = 1;
			} else {
				cursor.style.scale = 0;
			}
		}
	});
	
});

