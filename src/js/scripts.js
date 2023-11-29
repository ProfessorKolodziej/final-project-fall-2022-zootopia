// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


// define facts for all animals
const animalDescription = {
	giraffe: ["The tallest animals on Earth",
		"Long neck reaching up to 18 feet",
		"Habits in savannas"
	],
	elephant: ["The largest land animal",
		"Live in family groups led by a female",
		"Huge ears, long tusks, and a powerful trunk"
	],
	panda: ["The tallest animals on Earth",
		"Long neck reaching up to 18 feet",
		"Habits in savannas"
	],
	kangaroo: ["Mom kangaroos have a pouch for baby kangaroos",
		"They move by hopping on strong back legs",
		"Use their long tails to keep balance"
	],
	bear: ["Typically black fur, but can vary to brown or blonde",
		"weigh between 100-600 pounds",
		"can live up to 20 years in the wild"
	],
	alligator: ["Powerful bite with sharp teeth; strong for capturing prey",
		"Excellent swimmers, use their tails for propulsion",
		"Good night vision and sensitive to vibrations"
	]
}

//define messages for all animals


// definfe variables for the chat
let aniProfile1 = document.querySelector("ani-profile1");
let greeting = document.querySelector(".hello");
let questionWhere = document.querySelector(".where")
let aniProfile2 = document.querySelector("ani-profile2");
let answerWhere = document.querySelector(".answer-where");
let questionFood = document.querySelector(".question-food");
let aniProfile3 = document.querySelector("ani-profile3");
let answerFood = document.querySelector(".answer-food");
let questionSound = document.querySelector(".question-sound");
let aniProfile4 = document.querySelector("ani-profile4");
let answerSound = document.querySelector(".answer-sound");

// define variables for the prompts
let prompt1 = document.querySelector(".prompt-where");
let prompt2 = document.querySelector(".prompt-food");
let prompt3 = document.querySelector(".prompt-sound");

// define functions
