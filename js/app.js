'use strict'
var userName = prompt('What is your name please?');
alert('Welcome to my site ' + userName);

var rightAnswerCounter = 0;

function areYouWorking() {
    var workStatus = prompt('Are you currently working?');

    if (workStatus.toLowerCase() === 'yes') {
        //console.log('I am glad your job is not affected by Covid-19');
        alert('I am glad your job is not affected by Covid-19');
        rightAnswerCounter++;
    } else if (workStatus.toLowerCase() === 'no') {
        //console.log('Me too '+userName+ ' . I hope we will be software developers soon');
        alert('Me too ' + userName + ' . I hope we will be software developers soon');
    } else {
        //console.log ('Please answer yes or no')
        alert('Please answer yes or no')
    }
}

function vacation() {
    var takeVacation = prompt('Do you think I will go some where for vacation b/n code-301 and code-401?')

    if (takeVacation.toLowerCase() === 'yes') {
        //console.log('Nice guess! I am planning to');
        alert('Nice guess! I am planning to');
        rightAnswerCounter++;

    } else if (takeVacation.toLowerCase() === 'no') {
        //console.log('No! you get this wrong. Let us proceed to my next question');
        alert('No! you get this wrong. Let us proceed to my next question');
    } else {
        //console.log('Please answer yes or no')
        alert('Please answer yes or no')
    }
}
function youSwim() {
    var swimAbility = prompt('Can you swim?');

    if (swimAbility.toUpperCase() === 'YES') {
        //console.log('Great! may be you will teach me in the future');
        alert('Great! may be you will teach me in the future');
        rightAnswerCounter++;

    } else if (swimAbility.toUpperCase() === 'NO') {
        //console.log('Oh! Just like me. I am thinking to learn swimming soon');
        alert('Oh! Just like me. I am thinking to learn swimming soon');
    } else {
        //console.log ('Please answer yes or no')
        alert('Please answer yes or no')
    }
}
function footballFan() {
    var LikeFootball = prompt('Do you think that I like football?');

    if (LikeFootball.toUpperCase() === 'YES') {
        //console.log('Good job! I am a die hard Liverpool fun');
        alert('Good job! I am a die hard Liverpool fun');
        rightAnswerCounter++;

    } else if (LikeFootball.toUpperCase() === 'NO') {
        //console.log('No no no!!!! Liverpool is my team and "You will never walk alone" is our anthem');
        alert('No no no!!!! Liverpool is my team and "You will never walk alone" is our anthem');
    } else {
        //console.log('Please answer yes or no')
        alert('Please answer yes or no')
    }
}
function rateMyGame() {
    var rateGame = prompt('Do you like our game so far ' + userName + '?')

    if (rateGame.toUpperCase() === 'YES') {
        //console.log('Thank you '+userName+ 'see you next time');
        alert('Thank you ' + userName + ' see you next time');
        rightAnswerCounter++;

    } else if (rateGame.toUpperCase() === 'NO') {
        //console.log('Sorry '+userName+ 'I will try to make it better next time. see you!');
        alert('Sorry ' + userName + 'I will try to make it better next time.');
    } else {
        //console.log ('Please answer yes or no')
        alert('It was a yes or no question. bye for now')
    }
}

function myFavoriteNumber() {
    var favoriteNumber = 7;

    for (var i = 0; i < 6; i++) {
        var userGuess = parseInt(prompt('Please guess my favorite number?'));

        if (userGuess === favoriteNumber) {
            alert('Wow! you got it right ' + userName + ' One more qestion left');
            rightAnswerCounter++;
            break;

        } else if (i === 5 && (userGuess) !== favoriteNumber) {
            alert('you are out of guesses favorite number was ' + favoriteNumber);

        } else if (userGuess > favoriteNumber) {
            //console.log('Sorry '+userName+ 'I will try to make it better next time. see you!');
            alert('Sorry ' + userName + 'your guess is higher. Try to guess a lower nymber');

        } else if (userGuess < favoriteNumber) {
            //console.log ('Please answer yes or no')
            alert('your guess is lower. Try to guess a higher nymber');

        } else {
            alert('try again');
        }

    }

}


function myFavoritePlace() {
    var favoritePlacesToVisit = ['Colosseum', 'Lalibela', 'Eiffel Tower', 'Taj Mahal', 'Alcatraz', 'Axum'];
    var guessPlacesToVisit = prompt('can you guess one of the places I really want to visit?');
    var rightAnswer = false;

    for (var i = 0; i < 6; i++) {                                    //This is the start of the outer loop to count number of user's guess.
        for (var j = 0; j < favoritePlacesToVisit.length; j++) {     //This inner loop loops in to the favoritesPlacesToVisit array

            if (guessPlacesToVisit.toLowerCase() === favoritePlacesToVisit[j]) {
                alert('You got it right! the whole  lists of places I want to visit are ' + favoritePlacesToVisit);
                
                i = 6;
                rightAnswer = true;
                rightAnswerCounter++;
                break;
            }
        }
        if (rightAnswer === false) {
            alert('No! that is not right')
            guessPlacesToVisit = prompt('Please try again');
        }
    }
}

    areYouWorking();
    vacation();
    youSwim();
    footballFan();
    rateMyGame();
    myFavoriteNumber();
    myFavoritePlace();

    alert ('You answered '+rightAnswerCounter+ 'correctly' )


