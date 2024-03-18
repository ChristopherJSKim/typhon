let scoreQuiz = document.getElementById("scoreQuiz");
let submitDat = document.getElementById("submitDat");

function gradeDat(event) {
    event.preventDefault();
    let score = 0;
    let questionOne = document.getElementById("questionOne").value;
    let questionTwo = document.getElementById("questionTwo").value;
    let questionThree = document.getElementById("questionThree").value;

    if (questionOne.toLowerCase() === 'global elite') {
        score++;
    } 
    if (questionTwo.toLowerCase() === 'yes') {
        score++;
    }
    if (questionThree.toLowerCase() === 'no') {
        score++
    }
    if(score === 3) {
        scoreQuiz.innerHTML = `Congratulations you are an official member of Typhon!!`;
    } else {
        scoreQuiz.innerHTML = `Unfortunately, you will not be a member of Typhon. Please kill yourself.`
    }
}