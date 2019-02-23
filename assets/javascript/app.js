

//first declare the variables that will be needed throughout the game
$("img").hide();
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var questionArr = [{
    question: "What game Company devloped Persona 5?",
    answers: {
        a: "Microsoft",
        b: "Atlus",
        c: "Square-enix",
        d: "Nintendo",
    },
    correctAnswer: "Atlus",
    image: "assets/images/atlus.jpeg",
    
},
{
    question: "Who is the Main Protagonist in the game Resident Evil 4?",
    answers: {
        a: "Snake",
        b: "Colonel Mustard",
        c: "Leon Kennedy",
        d: "Chris Redfield",
    },
    correctAnswer: "Leon Kennedy",
    image: "assets/images/Leon.jpg",

},
{
    question: "Who is the Main charater in Legend of Zelda?",
    answers: {
        a: "Zelda",
        b: "Link",
        c: "shrek",
        d: "Naruto"
    },
    correctAnswer: "Link",
    image: "assets/images/Link.jpg",
},
{
    question: "Who was going to produce the Game Silent Hills ?",
    answers: {
        a: "Gabe Newell",
        b: "Hideo Kojima",
        c: "Hidetaki Miazaki",
        d: "Kyler Yohn",
    },
    correctAnswer: "Hideo Kojima",
    image: "assets/images/Kojima.gif",
},
{
    question: "how long was Kingdom Hearts 3 in development?",
    answers: {
        a: "12 years",
        b: "10 weeks",
        c: "6 years",
        d: "2 years",
    },
    correctAnswer: "6 years",
    image: "assets/images/Kingdom.jpg",
},
{   question: "How many games are there in the Super Smash Bro's series?",
    answers: {
        a: "2 games",
        b: "9 games",
        c: "4 games",
        d: "5 games",
    },
    correctAnswer: "5 games",
    image: "assets/images/SmashBros.gif",

},
{   question: "did you play Atari? if so do you know what 'atari' means?",
    answers: {
        a: "Frist",
        b: "Success",
        c: "Game",
        d: "atari",
    },
    correctAnswer: "Success",
    image: "assets/images/atari.jpg",

},
{   question: "Who is the borther of liquid snake?",
    answers: {
        a: "fast dog",
        b: "Snkeay snake",
        c: "Big Boss",
        d: "Solid Snake",
    },
    correctAnswer: "Solid Snake",
    image: "assets/images/bigBoss.gif",

},
{   question: "What game was never released in America",
    answers: {
        a: "Mother 3",
        b: "Earthbound",
        c: "Persona 2",
        d: "sly cooper",
    },
    correctAnswer: "Mother 3",
    image: "assets/images/mother.jpg",
}
];
$("#playAgain").hide();
var answerArr = [];
var count = 35;
var c = 0;
var d = 0;

//this will keep track of the index of the current question
var index = 0;

//this variable will be used to hold our setInterval that determines the time
var interval;
var interval2;
var interval3;

//create four new buttons that will take the space of the start

var A = $("<input/>").attr({
    type: "button",
    id: "button1",
    value: "new",

})
$(".content").append(A);

var B = $("<input/>").attr({
    type: "button",
    id: "button2",
    value: "new",

})
$(".content").append(B);

var C = $("<input/>").attr({
    type: "button",
    id: "button3",
    value: "new",

})
$(".content").append(C);

var D = $("<input/>").attr({
    type: "button",
    id: "button4",
    value: "new",
})

$(".content").append(D);

for (var h = 1; h < 5; h++) {
    $("#button" + h).hide();
}






$(document).ready(function(){
//call the game function that will be used when the start button is clicked
$("#start").on("click", function () {
    $("#start").hide();
    game();
    $("#Correct").hide();
    $("#incorrect").hide();
    $("#unanswered").hide();


});

function game() {
    $("#playAgain").hide();
    $("#question").show()
    //reset every thing back to 0 to reset if the player chooses to play again
    index = 0;
    c = 0;
    d = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    timers();
    button();
    question();
    answer();



}

function timers() {
    interval = setInterval(countDown, 1000);
    interval2 = setInterval(question, 1000 * 35);
    interval3 = setInterval(answer, 1000 * 35);

}

//this function will be responsible for keeping track of the time left as well as changing the page when either the time runs out or an answer is chosen
function countDown() {
    $("#correctAns").hide()
    $("img").hide();
    $("#timer").show();
    $("#timer").text("time that remains: " + count);
    count--;

    if (count == 0) {
        timerStop();
        screenChange3();
        unanswered++;
        count = 35;
    }
    else if ((correct + incorrect + unanswered) == questionArr.length) {
        for (var r = 1; r < 5; r++) {
            $("#button" + r).hide();
        }
        $("#timer").hide();
        $("#correctAns").hide();
        final();
    }
}




//create a function to show the buttons once the game is started
function button() {
    $("#correctAns").hide()
    $("#timer").show();
    for (var k = 1; k < 5; k++) {

        $("#button" + k).show();
    }
}

//create a function that will display a question
function question() {

    if (c < questionArr.length) {
        $("#question").text(questionArr[c].question);
        c++;
    }
}

//the purpose of this function is to change the value of the buttons 
function answer() {



    if (d < questionArr.length) {
        $("#button1").attr('value', questionArr[d].answers.a);
        $("#button2").attr('value', questionArr[d].answers.b);
        $("#button3").attr('value', questionArr[d].answers.c);
        $("#button4").attr('value', questionArr[d].answers.d);
        d++

    }
}


//decrement the value of d in the array to make sure that the correct answer lines up with what was clicked
$("#button1").on("click", function () {
    if (this.value === questionArr[d - 1].correctAnswer) {
        screenChange();
        timerStop();
        correct++;
    }
    else {
        screenChange2();
        timerStop();
        incorrect++;

    }

});
$("#button2").on("click", function () {
    if (this.value === questionArr[d - 1].correctAnswer) {
        screenChange();
        timerStop();
        correct++;
    }
    else {
        screenChange2();
        timerStop();
        incorrect++;

    }
});
$("#button3").on("click", function () {
    if (this.value === questionArr[d - 1].correctAnswer) {
        screenChange();
        timerStop();
        correct++;
    }
    else {
        screenChange2();
        timerStop();
        incorrect++;

    }
});
$("#button4").on("click", function () {
    if (this.value === questionArr[d - 1].correctAnswer) {
        screenChange();
        timerStop();
        correct++;

    }
    else {
        screenChange2();
        timerStop();
        incorrect++;

    }


});


//this function is used when the user has answered a question correctly
function screenChange() {
    $("#question").text("Well done! That is correct!");
    $("#correctAns").show();
    $("#img").show();
    $("#img").attr("src", questionArr[d -1].image);
    
    
    $("#correctAns").text( questionArr[d - 1].correctAnswer + " was the correct answer! ");
    for (var z = 1; z < 5; z++) {
        $("#button" + z).hide();
    }
    count = 35;
}

//this function is used when the user has answered a question incorrectly
function screenChange2() {
    $("#question").text("Ohh so sorry but that is incorrect");
    $("#correctAns").show();
    $("#img").show();
    $("#img").attr("src", questionArr[d -1].image);
    $("#correctAns").text("the correct answer was: " + questionArr[d - 1].correctAnswer);
    for (var e = 1; e < 5; e++) {
        $("#button" + e).hide();

    }
    count = 35;
}

//this function is used for when a user runs out of time
function screenChange3() {
    $("#question").text("You Ran Out Of time!");
    $("#correctAns").show();
    $("#img").show();
    $("#img").attr("src", questionArr[d -1].image);
    
    $("#correctAns").text("the correct answer was: " + questionArr[d - 1].correctAnswer);
    for (var g = 1; g < 5; g++) {
        $("#button" + g).hide();
    }

}


//this function is used to reset the timer and stop the other functions to display the proper answer page
function timerStop() {
    count = 35;
    $("#timer").hide();
    $("#img").show();
    clearInterval(interval);
    clearInterval(interval2);
    clearInterval(interval3);
    setTimeout(timers, 1000 * 4);
    setTimeout(button, 1000 * 5);
    setTimeout(question, 1000 * 5);
    setTimeout(answer, 1000 * 5);
}


//this function is used when the user gets to the final question it will display this after the final
function final() {
    $("#question").hide();
    clearInterval(interval);
    clearInterval(interval2);
    clearInterval(interval3);
    $("#Correct").text("the amount you got correct is : " + correct).show();
    $("#incorrect").text("the amount you got incorrect is : " + incorrect).show();
    $("#unanswered").text("The amount you left unanswered is : " + unanswered).show();
    $("#playAgain").show();
    $("#start").show();
}

});

