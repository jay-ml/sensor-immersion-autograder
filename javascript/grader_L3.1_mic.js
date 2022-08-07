/**
 * 
 * Autograder L3.1 Mic for Sensor Immersion Implementation
 * 
 * Created: Jay Luther - 5/23/2022
 * 
 * **/

// Boolean values to establish correct / incorrect code functionality
// top four are universal, others are contextual based on the specific tutorial
let foreverLoop = false;
let buttonPressed = false;
let pass = false;
let partialPass = false;
let error = false;

let first = true;
let iconShown = false;
let tonePlayed = false;
let logicError = false;
let soundGot = false;
let plottedSound = false;
let mic_value = 2500;

// Calls to execute student code, should be the same in every grader_L#.#_<sensor>.js file
function execute_student_code() {
    var student_code = document.getElementById('sc').value;
    let sc_1 = remove_input_functions(student_code);
    let runnable_code = remove_forever(sc_1);
    let result = Function(runnable_code);
    let result2 = Function(runnable_code);
    try {
        result();
        result2();
    } catch(e) {
        error = true;
    }
    if (iconShown && tonePlayed && plottedSound && !logicError) {
        pass = true;
    } else if (tonePlayed && plottedSound && !logicError) {
        partialPass = true;
    } 

    if (error) {
        window.location.assign("/sensor-immersion-autograder/html/error.html");
    } else if (pass) {
        window.location.assign("/sensor-immersion-autograder/html/correct.html");
    } else if (partialPass) {
        window.location.assign("/sensor-immersion-autograder/html/correct.html");
    } else if (!tonePlayed) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Mic_L3.1_NoTone.html");
    } else if (logicError) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Mic_L3.1_LogicError.html");
    } else if (!plottedSound) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Mic_L3.1_NoPlot.html");
    } else {
        window.location.assign("/sensor-immersion-autograder/html/wrong.html");
    }
}

// Logic of the grader: Load all libraries from defaults and extend
// the necessary functions to establish correct responses

class basic extends BasicDefault {

    static showIcon(icon){
        if (mic_value > 1000){
            iconShown = true;
        }
    }

}

class input extends InputDefault {

}

class led extends LedDefault {

    static plotBarGraph(soundIntensity, maxim){
        if (soundGot){
            plottedSound = true;
        }
    }
    
}

class music extends MusicDefault {

    static playTone(note, beats){
        if (mic_value > 1000){
            tonePlayed = true;
        } else {
            logicError = true;
            tonePlayed = true;
        }

    }

}

class neopixel extends NeopixelDefault {
    
}

class gatorEnvironment extends GatorEnvironmentDefault {

}

class gatorMicrophone extends GatorMicrophoneDefault {

    static getSoundIntensity() {
        if (first){
            first = false;
            return mic_value;
        } else if (mic_value > 1000){
            mic_value = 1;
            return mic_value;
        } else {
            soundGot = true;
        }
    }
}

class gatorSoil extends GatorSoilDefault {
    
}

// Refreshes the page when accessed via the back button
window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    //alert('refresh');
    window.location.reload();
  }
});