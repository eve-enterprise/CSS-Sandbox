// Fichier JavaScript principal
document.addEventListener("DOMContentLoaded", function() {
    const chars = document.querySelectorAll("p.text-animation span[data-type='char']");
	
	chars.forEach((char, index) => {
		// Set --opacity-start custom property at a number between 0 and 1
		char.style.setProperty("--opacity-start", Math.random());
		// Set --vie2-end custom property at a number between 0 and 50%
		char.style.setProperty("--view-end", `${Math.random() * 30 + 30}%`);
	});
});
