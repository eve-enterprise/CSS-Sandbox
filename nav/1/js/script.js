// Fichier JavaScript principal
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
	const navItems = document.querySelector(".nav-items");
	const navDropdown = document.querySelectorAll(".nav-item.nav-dropdown");

	// When burger is clicked, add active class to burger and navItems
	burger.addEventListener("click", function() {
		burger.classList.toggle("active");
		navItems.classList.toggle("active");
	});

	// When navDropdown is clicked, toggle active class
	navDropdown.forEach(item => {
		item.addEventListener("click", function() {
			navDropdown.forEach(item => {
				if (item !== this) {
					item.classList.remove("active");
				}
			});
			this.classList.toggle("active");
		});
	});
});
