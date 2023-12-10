// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


// define facts for all animals
const animalDescription = {
	giraffe: {
		name: "Giraffe",
		facts: ["The tallest animals on Earth", "Long neck reaching up to 18 feet", "Habits in savannas"],
		image: "./images/giraffe-cartoon.png",
		class: "giraffe",
	},
	elephant: {
		name: "Elephant",
		facts: ["The largest land animal",
			"Live in family groups led by a female",
			"Huge ears, long tusks, and a powerful trunk"
		],
		image: "./images/elephant-cartoon.png",
		class: "elephant",
	},
	panda: {
		name: "Panda",
		facts: ["I am black and white",
			"Sleep a lot due to their low-nutrition diet",
			"Despite their size, pandas are gentle and not aggressive"
		],
		image: "./images/panda-cartoon.png",
		class: "panda",
	},
	kangaroo: {
		name: "Kangaroo",
		facts: ["Mom kangaroos have a pouch for baby kangaroos",
			"They move by hopping on strong back legs",
			"Use their long tails to keep balance"
		],
		image: "./images/kangaroo-cartoon.png",
		class: "kangaroo",
	},
	bear: {
		name: "Bear",
		facts: ["Typically black fur, but can vary to brown or blonde",
			"weigh between 100-600 pounds",
			"can live up to 20 years in the wild"
		],
		image: "./images/bear-cartoon.png",
		class: "bear",
	},
	alligator: {
		name: "Alligator",
		facts: ["Powerful bite with sharp teeth; strong for capturing prey",
			"Excellent swimmers, use their tails for propulsion",
			"Good night vision and sensitive to vibrations"
		],
		image: "./images/alligator-cartoon.png",
		class: "alligator",
	}
};
const animalAnswerList = {
	'kangaroo': {
		avatar: './images/real-kangaroo.png',
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
	'panda': {
		avatar: './images/real-panda.png',
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
	'alligator': {
		avatar: './images/real-alligator.png',
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
	'bear': {
		avatar: './images/real-bear.png',
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
}
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
		handlerGenerateQuerstionDom(content);
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

//querstion Dom
function handlerGenerateQuerstionDom(content) {
	let querstionTextElement = document.createElement('p');
	querstionTextElement.classList.add('user-where');
	querstionTextElement.textContent = content;
	let chatContainerElement = document.querySelector('.animal-talk');
	chatContainerElement.appendChild(querstionTextElement);
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

function scrollToBottom(elementSelector) {
	let element = document.querySelector(elementSelector);
	if (element) {
		if (element.scrollHeight - element.scrollTop !== element.clientHeight) {
			element.scrollTop = element.scrollHeight - element.clientHeight;
		}
	}
}

//celar
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
