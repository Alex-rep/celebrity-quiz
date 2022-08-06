//this is the array of objects containing the questions and answers for the quiz
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
    },
    {
        question: "Congrats, you completed the quiz!",
        option1: "Restart",
        option2: "Restart"
    }
]

//main game loop starts after DOM is loaded
window.addEventListener('DOMContentLoaded', (event) =>{

    //load the buttons, question paragraph and score area into JS variables
    const buttons = Array.from(document.getElementsByClassName('buttons'));
    const question = document.getElementById('question');
    const restartButton = document.getElementById('restart');
    //index counter for the questions array
    let que_index = 0;
   
    loadQuestion(que_index);
    
    for(let index = 0; index < buttons.length; index++){
        buttons[index].addEventListener('click', function (event) {
            nextQuestion(event);
        });
    }

    restartButton.addEventListener('click', restartGame);

    /**
     * Obtains the inner text of the button that has been clicked and evaluates the 
     * correct answer. 
     */
    function nextQuestion(event){
        
        btn_answ = event.target.innerText;

        if(que_index === questionArray.length - 1){
            
            document.getElementById('question-holder').style.display = "none";
            document.getElementById('restart-box').style.display = "block";

        }else if(btn_answ === questionArray[que_index].answer){

            let score = parseInt(document.getElementById('correct').innerText);
            document.getElementById('correct').innerText = ++score;
            loadQuestion(++que_index);
        
        }else{

            let unScore = parseInt(document.getElementById('incorrect').innerText);
            document.getElementById('incorrect').innerText = ++unScore;
            loadQuestion(++que_index);
        }
    }
    /**
     * Loads the next question and possible answers for the buttons from the
     * questionArray object array 
     */
    function loadQuestion(index){

        question.innerHTML = questionArray[index].question;
        buttons[0].innerHTML = questionArray[index].option1;
        buttons[1].innerHTML = questionArray[index].option2;
    
    }

    /**
     * Resets question counter, displays the first question again and shows the question area and buttons
     */
    function restartGame(){
        
        que_index = 0;
        document.getElementById('correct').innerText = '0';
        document.getElementById('incorrect').innerText = '0';
        
        loadQuestion(que_index);
        document.getElementById('question-holder').style.display = "block";
        document.getElementById('restart-box').style.display = "none";

    }
});


