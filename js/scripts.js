// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


// define facts for all animals
const animalDescription = {
	giraffe: {
		name: 'Giraffe',
		facts: ["The tallest animals on Earth",
			" Long neck reaching up to 18 feet",
			" Habits in savannas."],
		image: "./images/giraffe-cartoon.png",
		class: "giraffe",
	},
	elephant: {
		name: "Elephant",
		facts: ["The largest land animal",
			" Live in family groups led by a female",
			" Huge ears, long tusks, and a powerful trunk."
		],
		image: "./images/elephant-cartoon.png",
		class: "elephant",
	},
	panda: {
		name: "Panda",
		facts: ["I am black and white",
			" Sleep a lot due to their low-nutrition diet",
			" Despite their size, pandas are gentle and not aggressive."
		],
		image: "./images/panda-cartoon.png",
		class: "panda",
	},
	kangaroo: {
		name: "Kangaroo",
		facts: ["Mom kangaroos have a pouch for baby kangaroos",
			" They move by hopping on strong back legs",
			" Use their long tails to keep balance."
		],
		image: "./images/kangaroo-cartoon.png",
		class: "kangaroo",
	},
	bear: {
		name: "Bear",
		facts: ["Typically black fur, but can vary to brown or blonde",
			" weigh between 100-600 pounds",
			" can live up to 20 years in the wild."
		],
		image: "./images/bear-cartoon.png",
		class: "bear",
	},
	alligator: {
		name: "Alligator",
		facts: ["Powerful bite with sharp teeth; strong for capturing prey",
			" Excellent swimmers, use their tails for propulsion",
			" Good night vision and sensitive to vibrations."
		],
		image: "./images/alligator-cartoon.png",
		class: "alligator",
	}
};

// an object storing all animal responses
const animalAnswerList = {
	'kangaroo': {
		avatar: './images/real-kangaroo.png',
		where: `I'm from the beautiful land of Australia. It's a vast place with all kinds of landscapes – from lush forests and grassy plains to the wide-open spaces of the outback. It's a unique spot on earth and the only place where you can find me and my kangaroo mates in the wild!`,
		food: `I love munching on different types of plants. My diet mainly consists of grasses, leaves, and sometimes shrubs. Eating these helps me grow strong and hop really high. It's so much fun to bounce around and find delicious greens to munch on under the bright Australian sun! `,
		sound: `...`,
	},
	'giraffe': {
		avatar: './images/giraffe-avatar.png',
		where: `I live in the African savannas and grasslands. These vast open spaces with plenty
		of
		trees and bushes
		provide the perfect habitat for giraffes like me.`,
		food: `I love munching on acacia leaves! They're tough for others to reach, but for me,
		with
		my
		long neck that
		can
		stretch up to 18 feet, it's like picking apples from a tree. Delicious and always a bit out of reach
		for
		the
		rest of the savanna crowd.`,
		sound: `...`,
	},
	'elephant': {
		avatar: './images/real-elephant.png',
		where: `I come from the vast landscapes of sub-Saharan Africa. You can find me roaming around the savannas with tall grasses, in the dense forests, or even in the dry deserts. This beautiful and diverse land, with its wide open spaces and abundant nature, is my home.`,
		food: `As an African elephant, I love to eat lots of plants! My menu includes leaves, twigs, fruit, and bark from trees and shrubs. I also really enjoy munching on grasses and other plants I find on the savanna. With my long trunk, I can reach high branches or pick up small bits of food.`,
		sound: `...`,
	},
	'panda': {
		avatar: './images/real-panda.png',
		where: `I come from the beautiful, misty mountain ranges in central China. You'll find me in places like Sichuan, Shaanxi, and Gansu provinces. My home is in the thick bamboo forests high up in the mountains, where it's cool and wet.`,
		food: `My favorite food is bamboo. I eat a lot of it – about 20 to 40 pounds every day! Bamboo is great because it's everywhere in my home in the Chinese mountains. But sometimes, I also eat other things like flowers, vines, and even small animals or fish if I find them.`,
		sound: `...`,
	},
	'alligator': {
		avatar: './images/real-alligator.png',
		where: `I'm from the southeastern part of America. You can find me lounging in the swamps, marshes, and rivers of states. These warm, freshwater habitats are perfect for me. They have plenty of sun for basking, water for swimming, and lots of food.`,
		food: `I catch fish that swim in my waters – they're my favorite. I also snatch up birds if they get too close. Sometimes, I find small mammals like rabbits or raccoons near the water, and they make a good meal!`,
		sound: `...`,
	},
	'bear': {
		avatar: './images/real-bear.png',
		where: `I come from the vast forests of North America. You can find me wandering through the woods of Canada and the United States. These forests are where I play, find my food, and raise my little cubs. They're full of trees, streams, and all sorts of places for a bear like me to explore.`,
		food: `I love to eat all sorts of things. My menu includes yummy berries, nuts, and fruits that I find in the forest. I also munch on leaves and plants. Sometimes, I catch fish from the streams or find insects to snack on. And if I'm lucky, I might come across some small mammals too.`,
		sound: `...`,
	},
}

// dynamic display of animal name and facts
// create variables
let bearButton = document.querySelector(".lil-bear");
let giraffeButton = document.querySelector(".lil-giraffe");
let elephantButton = document.querySelector(".lil-elephant");
let alligatorButton = document.querySelector(".lil-alligator");
let kangarooButton = document.querySelector(".lil-kangaroo");
let pandaButton = document.querySelector(".lil-panda");
let nameCard = document.querySelector(".name-card-container");
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
// displayAnimal
let animalSelected = null;

function displayAnimalInfo() {
	console.log(this);
	console.log(this.dataset.animal);
	nameCard.classList.toggle("show");
	nameCard.classList.toggle("hide");

	animalSelected = this.dataset.animal;
	animalName.innerText = animalDescription[animalSelected].name;
	animalFacts.innerText = animalDescription[animalSelected].facts;
	sayHi.innerText = "Say Hi to " + animalDescription[animalSelected].name + "!";
	// animalImage.src = animalDescription.elephant.image;
};
// add eventListeners to images of animals
alligatorButton.addEventListener("click", displayAnimalInfo);
pandaButton.addEventListener("click", displayPandaInfo);
bearButton.addEventListener("click", displayAnimalInfo);
kangarooButton.addEventListener("click", displayKangarooInfo);
giraffeButton.addEventListener("click", displayGiraffeInfo);
elephantButton.addEventListener("click", displayElephantInfo);

// dynamic display of animal name and facts
// create variables
let clickType = '';
let ishasType = [];
let element1 = document.getElementById("section3"); // chat-screen
let element2 = document.getElementById("section1"); // home-screen
let element3 = document.getElementById("section2"); // name-card-screen
let buttons = document.getElementsByClassName("des_action");
let animalImg = document.getElementById('animal-img');
let questionBtn = document.getElementsByClassName("questionAction");
let chatContainerElement = document.querySelector('.animal-talk');

// back
document.getElementById("myButton").addEventListener("click", function () {
	element1.classList.toggle("hide");
	element2.classList.toggle("hide");
	handleClear();
});
document.getElementById("home_btn").addEventListener("click", function () {
	element3.classList.toggle("hide");
	element2.classList.toggle("hide");
});
document.getElementById("say_hi_btn").addEventListener("click", function () {
	element3.classList.toggle("hide");
	element1.classList.toggle("hide");
	handleGenerateDom(`Hello there! I'm a ${clickType}`)
});

//des_action
function handlerDesAction(e) {
	clickType = this.getAttribute("data-animal");
	animalImg.setAttribute("src", animalDescription[clickType].image);
	animalImg.classList.remove(...animalImg.classList);
	animalImg.classList.add("animal-img", animalDescription[clickType].class);
	element2.classList.toggle("hide");
	element3.classList.toggle("hide");
}

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", handlerDesAction);
}

function handlerQuertion(e) {
	let type = this.getAttribute("data-type");
	let content = this.innerText;
	if (!ishasType.includes(type)) {
		handlerGenerateQuestionDom(content);
		let contents = animalAnswerList[clickType];
		handleGenerateDom(contents[type]);
		if (this) {
			this.style.backgroundColor = '#abb5be';
		}
		ishasType.push(type);
	}
}

//question_action

for (let i = 0; i < questionBtn.length; i++) {
	questionBtn[i].addEventListener("click", handlerQuertion);
}

//question Dom
function handlerGenerateQuestionDom(content) {
	let questionTextElement = document.createElement('p');
	questionTextElement.classList.add('user-where');
	questionTextElement.textContent = content;
	let chatContainerElement = document.querySelector('.animal-talk');
	chatContainerElement.appendChild(questionTextElement);
	scrollToBottom('.chat-list')
}

//generate chatDom
function handleGenerateDom(content) {
	let answerElement = document.createElement('section');
	answerElement.classList.add('avatar-message');
	let avatarElement = document.createElement('img');
	avatarElement.src = `${animalAnswerList[clickType].avatar}`;
	avatarElement.classList.add('ani-profile1');
	let answerTextElement = document.createElement('p');
	answerTextElement.classList.add('hello');
	answerTextElement.textContent = content;
	let chatContainerElement = document.querySelector('.animal-talk');
	answerElement.appendChild(avatarElement);
	answerElement.appendChild(answerTextElement);
	chatContainerElement.appendChild(answerElement);
	scrollToBottom('.chat-list')
}


// function for adjusting the screen dynamically
function scrollToBottom(elementSelector) {
	let element = document.querySelector(elementSelector);
	if (element) {
		if (element.scrollHeight - element.scrollTop !== element.clientHeight) {
			element.scrollTop = element.scrollHeight - element.clientHeight;
		}
	}
}

//clear everything
function handleClear() {
	if (chatContainerElement) {
		while (chatContainerElement.firstChild) {
			chatContainerElement.removeChild(chatContainerElement.firstChild);
		}
	}
	for (let i = 0; i < questionBtn.length; i++) {
		if (questionBtn[i]) {
			questionBtn[i].style.backgroundColor = '#FFD700';
		}
	}
	ishasType = [];
}
