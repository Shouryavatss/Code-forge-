const questions = [
    {
        question: "What is the formula for the area of a circle?",
        choices: ["A=2πr", "A=πr^2", "A=2r^2", "A=r^2"],
        correct: 1,
    },
    {
        question: "If the average of five consecutive even numbers is 18, what is the first number?",
        choices: ["12", "14", "16", "18"],
        correct: 1,
    },
    {
        question: "If the sum of the first 50 natural numbers is 1275, what is the sum of the first 100 natural numbers?",
        choices: ["5050", "5000", "5100", "4900"],
        correct: 0, 
    },
    {
        question: "The ratio of the sides of a rectangle is 5:7. If the area of the rectangle is 245 sq. cm, what are the dimensions of the rectangle?",
        choices: ["7 cm x 35 cm", "5 cm x 35 cm", "5 cm x 49 cm", "7 cm x 49 cm"],
        correct: 0  ,
    },
    {
        question: "A train travels at a speed of 60 km/h for the first half of the journey and at 80 km/h for the second half. What is the average speed for the entire journey?",
        choices: ["70 km/h", "75 km/h", "72 km/h", "78 km/h"],
        correct: 0,
    },
    {
        question: "The focal length of a convex lens is 10 cm. What is its power?",
        choices: ["+10 D", "+1 D", "+100 D", "-10 D"],
        correct: 1,
    },
    {
        question: "What is the common name of sodium bicarbonate?",
        choices: ["Baking powder", "Baking soda", "Washing soda", "Caustic soda"],
        correct: 1,
    },
    {
        question: "Which of the following is a noble gas?",
        choices: ["Oxygen", "Helium", "Chlorine", "Nitrogen"],
        correct: 1,
    },
    {
        question: "In which type of bonding are electrons shared between atoms?",
        choices: ["Ionic", "covalent", "metallic", "Hydrogen"],
        correct: 1,
    },
    {
        question: "f 𝐴=60∘ A=60∘ , what is the value of tan⁡𝐴?",
        choices: ["1", "2", "3", "root3"],
        correct: 3,
    },
    {
        question: "Find the derivative of x^2",
        choices: ["2x", "x", "3x", "4x"],
        correct: 0,
    },
    {
        question: "What is the escape velocity on Earth approximately?",
        choices: ["11.2 km/s", "12.4 km/s", "13.6 km/s", "14.8 km/s"],
        correct: 0,
    },
    {
        question: "The term 'Dharma Chakra' is associated with which of the following?",
        choices: ["Buddhism", "Hinduism", "Jainism", "Sikhism"],
        correct: 0,
    },
    {
        question: "The process of converting atmospheric nitrogen into ammonia is called:",
        choices: ["Photosynthesis", "Nitrogen fixation", "Fermentation", "Respiration"],
        correct: 1,
    },{
        question: "Which of the following is the main function of ribosomes?",
        choices: [" To synthesize proteins", "To provide energy to the cell", "To store genetic material", "To transport molecules"],
        correct: 0,
    },
    {
        question: "In the context of economics, the term 'inflation' refers to:",
        choices: ["A decrease in the general level of prices", "A sustained increase in the general level of prices", "A situation where wages rise without a corresponding increase in productivity", "A temporary rise in prices of essential goods"],
        correct: 1,
    },
    {
        question: "Which of the following elements is used in the making of semiconductors?",
        choices: ["Gold", "Silicon", "Aluminum", "Copper"],
        correct: 1, 
    },
    {
        question: "In the field of literature, who is the author of the novel 1984?",
        choices: ["Aldous Huxley", "George Orwell", "J.K. Rowling", "Franz Kafka"],
        correct: 1,
    },
    {
        question: "Who is considered the Father of the Indian Nation?",
        choices: ["Jawaharlal Nehru", " Sardar Patel", "Bhagat Singhr", "Mahatma Gandhi"],
        correct: 3,
    },{
        question: "What is the formula for the area of a circle?",
        choices: ["A=2πr", "A=πr^2", "A=2r^2", "A=r^2"],
        correct: 1,
    },
    {
        question: "If the average of five consecutive even numbers is 18, what is the first number?",
        choices: ["12", "14", "16", "18"],
        correct: 1,
    },
    {
        question: "If the sum of the first 50 natural numbers is 1275, what is the sum of the first 100 natural numbers?",
        choices: ["5050", "5000", "5100", "4900"],
        correct: 0, 
    },
    {
        question: "The ratio of the sides of a rectangle is 5:7. If the area of the rectangle is 245 sq. cm, what are the dimensions of the rectangle?",
        choices: ["7 cm x 35 cm", "5 cm x 35 cm", "5 cm x 49 cm", "7 cm x 49 cm"],
        correct: 0  ,
    },
    {
        question: "A train travels at a speed of 60 km/h for the first half of the journey and at 80 km/h for the second half. What is the average speed for the entire journey?",
        choices: ["70 km/h", "75 km/h", "72 km/h", "78 km/h"],
        correct: 0,
    },
    {
        question: "What is the escape velocity on Earth approximately?",
        choices: ["11.2 km/s", "9.8 km/s", "15 km/s", "7.9 km/s"],
        correct: 0,
    },
    {
        question: "A 5 kg object is moving with a velocity of 10 m/s. What is its kinetic energy?",
        choices: ["250 J", "500 J", "100 J", "2500 J"],
        correct: 3,
    },{
        question: "Which gas is used in the Haber process to produce ammonia?",
        choices:[" Oxygen","Hydrogen","Nitrogen","Helium"],
        correct: 1,
    },{
        question: "Which of the following is the molecular formula of ethanol?",
        choices:["CH3OH","C2H5OH","C3H7OH","C2H4O"],
        correct: 1,
    },{
        question: "What is the oxidation state of oxygen in H2O2?",
        choices:["-2","-1","0","1"],
        correct: 1,
    },{
        question: "Which is the hardest natural substance?",
        choices:["Quartz","Diamond","Graphite","Corundum"],
        correct: 1,
    },{
        question: "What is the sum of the first 5 terms of the arithmetic sequence 2, 4, 6, 8, ...?",
        choices:["20","30","25","35"],
        correct: 1,
    },{
        question: "Synonym of abundant:",
        choices:["Few"," Limited"," Plentiful","Scarce"],
        correct: 2,
    },{
        question: "Identify the correct sentence:",
        choices:["She don't like apples.","She doesn't likes apples","She doesn't like apples","She not like apples."],
        correct: 2,
    },{
        question: "What is the meaning of ubiquitous?",
        choices:["Everywhere ","Rare","Unique","Selective"],
        correct: 0,
    },{
        question: "Which word is a noun?",
        choices:["Quick","Run","Blue","Apple"],
        correct: 1,
    },{
        question: "Fill in the blank: 'He is _____ intelligent than his brother.'",
        choices:["more","most","very","too"],
        correct: 0,
    },{
        question: "If A is 2 years older than B and B is 3 years older than C, how old is A if C is 10?",
        choices:["12","13","15","14"],
        correct: 2,
    },{
        question: "Find the odd one out: 2, 4, 8, 12, 16",
        choices:["2","4","8","12"],
        correct: 3,
    },{
        question: "What comes next in the sequence? 2, 6, 12, 20, ...",
        choices:["28","30","32","34"],
        correct: 0,
    },{
        question: "If A is coded as 1, B as 2, and C as 3, what is the code for 'CAB'?",
        choices:["312","231","123","145"],
        correct: 0,
    },{
        question: "How many triangles are there in a pentagon?",
        choices:["3","5","10","15"],
        correct: 2,
    },{
        question: "Who is known as the 'Father of Indian Renaissance'?",
        choices: ["Jawaharlal Nehru", "Rabindranath Tagore", "Swami Vivekananda", "Raja Ram Mohan Roy"],
        correct: 3,
    },
    {
        question: "What is the chemical formula for sulfuric acid?",
        choices: ["H2SO4", "HNO3", "HCl", "NaOH"],
        correct: 0,
    },
    {
        question: "The Battle of Plassey was fought in which year?",
        choices: ["1757", "1857", "1657", "1767"],
        correct: 0, 
    },{
        question: "What is the SI unit of electric charge?",
        choices:["Volt","Coulomb","Newton","Joule"],
        correct: 1,
    },{
        question: "What is the work done when a force of 10 N moves an object 5 m in the direction of the force?",
        choices:["50 J","10J","5J","100J"],
        correct: 0,
    },{
        question: "The time period of a pendulum depends on:",
        choices:[" Mass of the bob","Amplitude of swing","Length of the pendulum","None of these"],
        correct: 2,
    },{
        question: "Which law states that energy cannot be created or destroyed?",
        choices:["Newton’s First Law","Law of Conservation of Energy","Bernoulli's Theorem","Pascal's Law"],
        correct: 1,
    },{
        question: "Which wave phenomenon explains the bending of light around corners?",
        choices:["Reflection","Refraction","Refraction","Interference"],
        correct: 2,
    },{
        question: "What is the pH of pure water at 25°C?",
        choices:["0","7","14","1"],
        correct: 1,
    }
];


const questionEl = document.getElementById("question");
const choicesEls = document.querySelectorAll(".choice-container");
const choiceTexts = document.querySelectorAll(".choice-text");
const resultEl = document.getElementById("result");

let currentQuestionIndex = 0;
let selectedChoiceIndex = null;
let currentScore = 0;
let highScore = localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : 0;

function displayHighScore() {
    const highScoreElement = document.createElement("p");
    highScoreElement.innerText = `High Score: ${highScore}`;
    resultEl.appendChild(highScoreElement);
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;

    
    choiceTexts.forEach((choiceText, index) => {
        choiceText.innerText = currentQuestion.choices[index];
    });

    resultEl.innerText = "";
}

choicesEls.forEach((choiceEl, index) => {
    choiceEl.addEventListener("click", () => {
        
        selectedChoiceIndex = index;

        
        choicesEls.forEach((el) => el.classList.remove("selected"));
        choiceEl.classList.add("selected");

        
        setTimeout(() => {
            checkAnswer();
        }, 500);
    });
});


function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = currentQuestion.correct;

    choicesEls.forEach((choiceEl, index) => {
        choiceEl.classList.remove("selected");
        if (index === correctIndex) {
            choiceEl.classList.add("correct");
        } else if (index === selectedChoiceIndex) {
            choiceEl.classList.add("wrong");
        }
    });

    if (selectedChoiceIndex === correctIndex) {
        currentScore++;
    }

    const resultMessage =
        selectedChoiceIndex === correctIndex
            ? "Correct! Great job."
            : `Wrong! The correct answer was "${currentQuestion.choices[correctIndex]}"`;
    resultEl.innerText = resultMessage;

    setTimeout(nextQuestion, 2000);
}


function nextQuestion() {
    choicesEls.forEach((el) => el.classList.remove("correct", "wrong", "selected"));

    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}


function endQuiz() {
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem("highScore", highScore); 
    }

    resultEl.innerText = `You've completed the quiz! Your score: ${currentScore}`;
    displayHighScore();

    setTimeout(resetQuiz, 5000);
}

function resetQuiz() {
    currentQuestionIndex = 0;
    currentScore = 0;
    resultEl.innerText = "";
    loadQuestion();
}

loadQuestion();
