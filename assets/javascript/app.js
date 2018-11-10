

var questions = [
    {
        question:"What is a metal that can't be forged?",
        right:"black",
        answers:["adamantite", "black", "steel", "rune"]
    },
    {
        question:"How many waves are in the fight cave?",
        right:"63",
        answers:["90", "66", "63", "50"]
    },
    {
        question:"How many levels are in the wilderness?",
        right:"56",
        answers:["46", "50", "64", "56"]
    },
    {
        question:"What is the default respawn location?",
        right:"Lumbridge",
        answers:["Lumbridge", "Varrock", "Edgeville", "Camelot"]
    },
    {
        question:"What language was RuneScape written in?",
        right:"Java",
        answers:["Ada", "C", "Java", "C++"]
    },
    {
        question:"What amount of experience is required to reach level 99 in a skill?",
        right:"13,034,431",
        answers:["99,999,999", "13,034,431", "32,214,865", "2,147,483,647"]
    },
    {
        question:"Who is the boss that holds the ice diamond?",
        right:"Kamil",
        answers:["Fareed", "Dessous", "Damis", "Kamil"]
    },
    {
        question:"Which helmet is weaker than the rest?",
        right:"Dharok's",
        answers:["Dharok's", "Verac's", "Guthan's", "Torag's"]
    },
    {
        question:"How many HP does a whole apple pie heal?",
        right:"14",
        answers:["13", "14", "16", "99"]
    },
    {
        question:"When does OSRS Mobile come out?",
        right:"In your dreams",
        answers:["The 3rd Age", "Winter 2017", "Soon", "In your dreams"]
    },
]


var questionIndex = 0;
var interval;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

function print(index){
    $("#question").empty();
    $("#answers").empty();
    $("#feedback").empty();
    time();

    $("#question").text(questions[index].question);

    for(var i=0; i<questions[index].answers.length; i++){

        var button = $("<button class='btn btn-primary btn-lg answer'>" + questions[index].answers[i] + "</button>");
        
        if(button.text() === questions[index].right){
            button.addClass("right");            
        }else{
            button.addClass("wrong");            
        }

        $("#answers").append(button);
    }
}

function time(){
    var time = 10;

    interval = setInterval(function(){

        $("#time").text(time);
    
        time--;
        if(time < 0){
            unanswered++;
            answer();
        }
    }, 1000);    
}


function answer(){
    clearInterval(interval);
    $("#time").empty();
    $(".answer").prop('disabled', true);
    $(".right").addClass("btn-success");
    $(".wrong").addClass("btn-danger");

    setTimeout(function(){
        questionIndex++;
        if(questionIndex === questions.length){
            $("#playAgain").removeClass("invisible");
            $("#feedback").html("Correct: " + correct + "</br>" + "Incorrect: " + incorrect + "</br>" + "Unanswered: " + unanswered);

        }else{
            print(questionIndex);
        }
    }, 3000);
}



    

$(document).on("click", ".answer", function(){

    answer();

    if(this.classList.contains("right")){
        $("#feedback").text("Correct");
        correct++;
    }else{
        $("#feedback").text("Incorrect");
        incorrect++;
    }
});


$("#playAgain").on("click", function(){
    $("#playAgain").addClass("invisible");

    questionIndex = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    print(questionIndex);
});



print(questionIndex);
