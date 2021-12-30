var Questions =[ 
    {
    question: "what is your name?",
    answers: ["abe","mike","steve","linda"], 
    correctAnswer: "abe"
    },
    {
    question: "how old are you?",
    answers:["18"],
    correctAnswer: ""
    }
]


console.log(Questions[0].answers)
var questionElement = document.getElementById("Questions")
var answerElement =  document.getElementById("answers")
function showQuestions() {
    questionElement.textContent= Questions[0].question
}
showQuestions()

function showAnswers() {
   
    for (let i = 0; i < Questions[0].answers.length;  i++) {
    //create li elements with text from each possible answer
    
    //append to the answer element

    
}
}