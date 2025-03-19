// 1) Récupérer toutes les sections
const sections = document.querySelectorAll(".panel")

// 2) Récupérer toutes les étapes
const steps = document.querySelectorAll(".steps li")

// 3) Récupérer le container .steps pour mettre à jour la variable CSS
const stepsContainer = document.querySelector(".steps")

// Options de l'intersection observer
const options = {
	root: null, // viewport
	rootMargin: "0px",
	threshold: 0.3 // déclenche quand ~30% de la section est visible
}

function intersectionCallback(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// La section est visible => on active l'étape correspondante
			activateStep(entry.target.id)
		}
	})
}

// Initialiser l’observer
const observer = new IntersectionObserver(intersectionCallback, options)
sections.forEach(sec => observer.observe(sec))

function activateStep(sectionId) {
	// Désactiver toutes les étapes
	steps.forEach(step => step.classList.remove("active"))

	// Activer l’étape correspondante
	const liToActivate = document.querySelector(
		`.steps li[data-target="${sectionId}"]`
	)
	if (liToActivate) {
		liToActivate.classList.add("active")
	}

	// Mettre à jour la barre violette
	updateProgressBar()
}

function updateProgressBar() {
	// Trouver l’index de la dernière étape active
	let lastActiveIndex = -1
	steps.forEach((step, index) => {
		if (step.classList.contains("active")) {
			lastActiveIndex = index
		}
	})

	// Si aucune étape active, on remet la barre à 0
	if (lastActiveIndex === -1) {
		stepsContainer.style.setProperty("--progress-height", "0px")
		return
	}

	// Calculer la position de cette étape dans la liste
	const stepElement = steps[lastActiveIndex]
	// offsetTop = distance du haut du parent (i.e. .steps)
	// On peut ajouter un petit +12 pour que la barre arrive au centre du rond
	const offset = stepElement.offsetTop + 12

	// On applique la hauteur calculée à la variable CSS
	stepsContainer.style.setProperty("--progress-height", offset + "px")
}

// Appel initial
updateProgressBar()
