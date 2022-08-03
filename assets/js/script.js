const questionArray = [
    {
        question: "Who plays Galadriel in 'Lord of the Rings'?",
        answer: "Kate Blanchett",
        option1: "Kate Blanchett",
        option2: "Sharon Stone"
    },
    {
        question: "Who plays Nathan Algren in 'Last Samurai'?",
        answer: "Tom Cruise",
        option1: "Brad Pitt",
        option2: "Tom Cruise"
    },
    {
        question: "Who plays Black Widow in 'Marvel's Avengers'?",
        answer: "Scarlett Johansson",
        option1: "Scarlett Johansson",
        option2: "Natalie Portman"
    },
    {
        question: "Who plays Harry S. Stamper in 'Armageddon'?",
        answer: "Bruce Willis",
        option1: "Russell Crowe",
        option2: "Bruce Willis"
    },
    {
        question: "Who plays Maximus in 'Gladiator'?",
        answer: "Russell Crowe",
        option1: "Russell Crowe",
        option2: "Ben Affleck"
    }
]


window.addEventListener('DOMContentLoaded', (event) =>{

    const buttons = document.getElementsByClassName('buttons');
    const question = document.getElementById('question');

    loadQuestion(1);


    function loadQuestion(index){

        question.innerHTML = questionArray[index].question;
        buttons[0].innerHTML = questionArray[index].option1;
        buttons[1].innerHTML = questionArray[index].option2;
    
    }

})


