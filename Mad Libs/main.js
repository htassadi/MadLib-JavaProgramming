//variables and input
'use strict';

//Button Activated 
document.getElementById('lib-button').addEventListener('click', MadLibResults)


//generator 
function MadLibResults() {

    //Input
    let verb = document.getElementById('verb').value ;
    let pluralnoun = document.getElementById('pluralnoun').value;
    let adjective = document.getElementById('adjective').value;
    let presentverb= document.getElementById('presentverb').value;
    let noun = document.getElementById('noun').value;
    
    //build message
    let message= 'There are too many'+ " " + verb + " " + pluralnoun + " "  + 'on this' + " " + adjective + " "  + 'airplane!", I' + " " + presentverb + ". Somebody has to run on the"+ " " + noun + " " + 'to solve this problem!"'
    
    //Output
    document.getElementById('story').innerHTML= message;

}





