import Questions from './../data/quizQuestions'
var questionCreated = []
var easyQuestionList = [];
var mediumQuestionList = []
var hardQuestionList = []

export const questionAlign = () => {
    easyQuestionCreations();
    QuestionCreate(easyQuestionList);
    mediumQuestionCreations();
    QuestionCreate(mediumQuestionList);
    hardQuestionCreations();
    QuestionCreate(hardQuestionList);
    return questionCreated;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function easyQuestionCreations() {
    let index = getRandomArbitrary(0, 14);
    if (!easyQuestionList.includes(Math.round(index))) {
        easyQuestionList.push(Math.round(index))
        if(easyQuestionList.length < 5){
            easyQuestionCreations();
        }
    }
    
}

function mediumQuestionCreations() {
    let index = getRandomArbitrary(15,24);
    if (!mediumQuestionList.includes(Math.round(index))) {
        mediumQuestionList.push(Math.round(index))
        if(mediumQuestionList.length < 3){
            mediumQuestionCreations();
        }
    }
}

function hardQuestionCreations() {
    let index = getRandomArbitrary(24,29);
    if (!hardQuestionList.includes(Math.round(index))) {
        hardQuestionList.push(Math.round(index))
        if(hardQuestionList.length < 2){
            hardQuestionCreations();
        }
    }
}

function QuestionCreate(questionArray){
    questionArray.find(x=> {
        Questions.find(quest => {
            if(quest.index === x){
                return questionCreated.push(quest);
            }
        })
    })
}

export function CalculateAnswer(UserObject){
    let currentScore = 0;
    console.log('Answers -> ',UserObject);

    for(let i =0;i<questionCreated.length;i++){
        questionCreated.find(x=>{
            if(x.question === UserObject.answer.name[i]){
                x.options.find(optionValue => {
                    if(optionValue.isCorrect === true){
                        if(optionValue.option === UserObject.answer.value[i]){
                            currentScore = currentScore + 3;
                        }
                        else{
                            currentScore = currentScore - 1;
                        }
                    }
                })
            }
        })
    }
    console.log('User Scored -> ',currentScore)
    return currentScore;
}
