'use strict'

var userName = prompt('What is your name please?');
alert('Welcome to my site ' + userName);

    var workStatus = prompt('Are you currently working?');

    if(workStatus.toLowerCase() === 'yes'){
        //console.log('I am glad your job is not affected by Covid-19');
        alert('I am glad your job is not affected by Covid-19');
    } else if (workStatus.toLowerCase()=== 'no'){
        //console.log('Me too '+userName+ ' . I hope we will be software developers soon');
        alert('Me too '+userName+ ' . I hope we will be software developers soon');
    } else {
        //console.log ('Please answer yes or no')
        alert ('Please answer yes or no')
    }

            var takeVacation = prompt('Do you think I will go some where for vacation b/n code-301 and code-401?')

            if(takeVacation.toLowerCase() === 'yes'){
                //console.log('Nice guess! I am planning to');
                alert('Nice guess! I am planning to');
            } else if (takeVacation.toLowerCase()==='no') {
                //console.log('No! you get this wrong. Let us proceed to my next question');
                alert('No! you get this wrong. Let us proceed to my next question');
            } else {
                //console.log('Please answer yes or no')
                alert ('Please answer yes or no')
            }

                        var swimAbility =prompt('Can you swim?');

                        if(swimAbility.toUpperCase() === 'YES'){
                            //console.log('Great! may be you will teach me in the future');
                            alert('Great! may be you will teach me in the future');
                        } else if (swimAbility.toUpperCase() === 'NO'){
                            //console.log('Oh! Just like me. I am thinking to learn swimming soon');
                            alert('Oh! Just like me. I am thinking to learn swimming soon');
                        } else {
                            //console.log ('Please answer yes or no')
                            alert ('Please answer yes or no')
                        }

                var LikeFootball =prompt('Do you think that I like football?');

                if(LikeFootball.toUpperCase() === 'YES'){
                    //console.log('Good job! I am a die hard Liverpool fun');
                    alert('Good job! I am a die hard Liverpool fun');
                } else if (LikeFootball.toUpperCase() === 'NO') {
                    //console.log('No no no!!!! Liverpool is my team and "You will never walk alone" is our anthem');
                    alert('No no no!!!! Liverpool is my team and "You will never walk alone" is our anthem');
                } else {
                    //console.log('Please answer yes or no')
                    alert ('Please answer yes or no')
                }

    var rateGame= prompt('Do you like our game so far ' +userName+'?')

    if(rateGame.toUpperCase() === 'YES'){
        //console.log('Thank you '+userName+ 'see you next time');
        alert('Thank you '+userName+ 'see you next time');
    } else if (rateGame.toUpperCase() === 'NO') {
        //console.log('Sorry '+userName+ 'I will try to make it better next time. see you!');
        alert('Sorry '+userName+ 'I will try to make it better next time. see you!');
    } else {
        //console.log ('Please answer yes or no')
        alert ('It was a yes or no question. bye for now')
    }


