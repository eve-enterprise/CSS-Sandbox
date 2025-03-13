const container = document.querySelector('.container');
let currentAngle = 0;

// ici, tu ajustes cette valeur (actuellement 3 degrés pour une sensibilité douce)
const scrollSensitivity = 5;

container.addEventListener('wheel', (e) => {
	if (!container.matches(':hover')) return; // rotation uniquement si souris sur .container
	e.preventDefault();
	currentAngle += e.deltaY > 0 ? scrollSensitivity : -scrollSensitivity;

	document.querySelectorAll('.card').forEach((card, index) => {
		card.style.transform = `translate(-50%, -50%) rotate(${currentAngle + index * 90}deg)`;
	});
}, { passive: false });

// Initialisation des cartes à la rotation initiale
const cards = document.querySelectorAll('.card');
	cards.forEach((card, index) => {
		card.style.transform = `translate(-50%, -50%) rotate(${index * 90}deg)`;
	});
