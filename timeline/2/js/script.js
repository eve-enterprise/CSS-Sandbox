document.addEventListener("DOMContentLoaded", function() {
	document.addEventListener("scroll", () => {
		const box = document.querySelector(".box");
		const progressBars = document.querySelectorAll(".timeline .progress");

		const scrollSection = document.querySelector(".vh-500");
		const scrollStart = scrollSection.offsetTop;
		const scrollEnd = scrollStart + scrollSection.offsetHeight - window.innerHeight;
	
		const scrollY = window.scrollY;
		if (scrollY >= scrollStart && scrollY <= scrollEnd) {
			const scrollProgress = ((scrollY - scrollStart) / (scrollEnd - scrollStart)) * 100;
			if (scrollProgress <= 50) {
				progressBars[0].style.setProperty("--progress", `${scrollProgress * 2}%`);
				progressBars[1].style.setProperty("--progress", "0%");
			} else {
				progressBars[0].style.setProperty("--progress", "100%");
				progressBars[1].style.setProperty("--progress", `${(scrollProgress - 50) * 2}%`);
			}
		}
	});	
})