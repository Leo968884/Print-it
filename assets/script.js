// Tableau contenant les données des diapositives
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Initialisation de l'index du banner
let bannerIndex = 0;

// Sélection des éléments du DOM
let baliseArrowLeft = document.querySelector(".arrow_left");
let baliseArrowRight = document.querySelector(".arrow_right");
let dotsContainer = document.querySelector(".dots");
let dotSelected = document.querySelector(".dot_selected");
const bannerImg = document.querySelector(".banner-img");
const tagId = document.getElementById("tagLine");

// Fonction pour changer l'image et la tagLine du banner
function changeCarousel() {
	bannerImg.src = "./assets/images/slideshow/" + slides[bannerIndex].image;
	tagId.innerHTML = slides[bannerIndex].tagLine;
}

// Fonction pour changer le point sélectionné
function changeDot() {
	let dotSelected = document.querySelector(".dot_selected");
	dotSelected.classList.remove("dot_selected");
	let currentDot = document.querySelector("span[data-index='" + bannerIndex + "']");
	currentDot.classList.add("dot_selected");
}

// Écouteur d'événement sur le clic de la flèche droite
baliseArrowRight.addEventListener("click", function () {
	console.log("Flèche droite cliquée !");
	bannerIndex++;
	if (bannerIndex >= slides.length) {
		bannerIndex = 0;
	};
	changeCarousel();
	changeDot();
});

// Écouteur d'événement sur le clic de la flèche gauche
baliseArrowLeft.addEventListener("click", function () {
	console.log("Flèche gauche cliquée !");
	bannerIndex--;
	if (bannerIndex < 0) {
		bannerIndex = slides.length - 1;
	}
	changeCarousel();
	changeDot();
});

// Création des points de navigation
slides.forEach((slides, index) => {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	dot.setAttribute("data-index", index);
	// Ajout de la classe 'dot_selected' au point correspondant à l'index du banner
	if (index == bannerIndex) {
		dot.classList.add("dot_selected");
	}
	dotsContainer.appendChild(dot);
});