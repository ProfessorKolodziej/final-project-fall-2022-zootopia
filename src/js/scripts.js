// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


// define facts for all animals
const animalDescription = {
	giraffe: {
		name: "Giraffe",
		facts: ["The tallest animals on Earth", "Long neck reaching up to 18 feet", "Habits in savannas"],
		// image: "images/cartoon-giraffe.jpg"
	},
	elephant: {
		name: "Elephant",
		facts: ["The largest land animal",
			"Live in family groups led by a female",
			"Huge ears, long tusks, and a powerful trunk"
		],
		// image: "images/cartoon-elephant.jpg"
	},
	panda: {
		name: "Panda",
		facts: ["I am black and white",
			"Sleep a lot due to their low-nutrition diet",
			"Despite their size, pandas are gentle and not aggressive"
		],
		// image: "images/cartoon-panda.jpg"
	},
	kangaroo: {
		name: "Kangaroo",
		facts: ["Mom kangaroos have a pouch for baby kangaroos",
			"They move by hopping on strong back legs",
			"Use their long tails to keep balance"
		],
		// image: "images/cartoon-kangaroo.jpg"
	},
	bear: {
		name: "Bear",
		facts: ["Typically black fur, but can vary to brown or blonde",
			"weigh between 100-600 pounds",
			"can live up to 20 years in the wild"
		],
		// image: "images/cartoon-bear.jpg"
	},
	alligator: {
		name: "Alligator",
		facts: ["Powerful bite with sharp teeth; strong for capturing prey",
			"Excellent swimmers, use their tails for propulsion",
			"Good night vision and sensitive to vibrations"
		],
		// image: "images/cartoon-alligator.jpg"
	}
};

// dynamic display of animal name and facts

// create variables
let bearButton = document.querySelector(".lil-bear");
let giraffeButton = document.querySelector(".lil-giraffe");
let elephantButton = document.querySelector(".lil-elephant");
let alligatorButton = document.querySelector(".lil-alligator");
let kangarooButton = document.querySelector(".lil-kangaroo");
let pandaButton = document.querySelector(".lil-panda");
let animalName = document.querySelector(".name");
let animalFacts = document.querySelector(".facts");
let sayHi = document.querySelector(".say-hi-button");
// let animalImage = document.querySelector(".animal-image");

// function for displaying animal name card
function displayBearInfo() {
	animalName.innerText = animalDescription.bear.name;
	animalFacts.innerText = animalDescription.bear.facts;
	sayHi.innerText = "Say Hi to " + animalDescription.bear.name + "!";
};
// animalImage.src = animalDescription.bear.image;
function displayPandaInfo() {
	animalName.innerText = animalDescription.panda.name;
	animalFacts.innerText = animalDescription.panda.facts;
	sayHi.innerText = "Say Hi to " + animalDescription.panda.name + "!";
	// animalImage.src = animalDescription.panda.image;
};
function displayAlligatorInfo() {
	animalName.innerText = animalDescription.alligator.name;
	animalFacts.innerText = animalDescription.alligator.facts;
	sayHi.innerText = "Say Hi to " + animalDescription.alligator.name + "!";
	// animalImage.src = animalDescription.alligator.image;
};
function displayKangarooInfo() {
	animalName.innerText = animalDescription.kangaroo.name;
	animalFacts.innerText = animalDescription.kangaroo.facts;
	sayHi.innerText = "Say Hi to " + animalDescription.kangaroo.name + "!";
	// animalImage.src = animalDescription.kangaroo.image;
};
function displayGiraffeInfo() {
	animalName.innerText = animalDescription.giraffe.name;
	animalFacts.innerText = animalDescription.giraffe.facts;
	sayHi.innerText = "Say Hi to " + animalDescription.giraffe.name + "!";
	// animalImage.src = animalDescription.giraffe.image;
};
function displayElephantInfo() {
	animalName.innerText = animalDescription.elephant.name;
	animalFacts.innerText = animalDescription.elephant.facts;
	sayHi.innerText = "Say Hi to " + animalDescription.elephant.name + "!";
	// animalImage.src = animalDescription.elephant.image;
};

// add eventListeners to images of animals
alligatorButton.addEventListener("click", displayAlligatorInfo);
pandaButton.addEventListener("click", displayPandaInfo);
bearButton.addEventListener("click", displayBearInfo);
kangarooButton.addEventListener("click", displayKangarooInfo);
giraffeButton.addEventListener("click", displayGiraffeInfo);
elephantButton.addEventListener("click", displayElephantInfo);
