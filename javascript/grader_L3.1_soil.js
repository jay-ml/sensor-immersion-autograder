/**
 * 
 * Autograder L3.1 Soil for Sensor Immersion Implementation
 * 
 * Created: Jay Luther - 5/23/2022
 * 
 * **/

// Boolean values to establish correct / incorrect code functionality
// top four are universal, others are contextual based on the specific tutorial
let foreverLoop = false;
let buttonPressed = false;
let pass = false;
let error = false;

let first = true;
let soilGot = false;
let playedTone = false;
let logicError = false;
let wrongPins = false;
let soil_value = 1;
let num_icons = 0;
let num_pauses = 0;

// Calls to execute student code, should be the same in every grader_L#.#_<sensor>.js file
function execute_student_code() {
    var student_code = document.getElementById('sc').value;
    let sc_1 = remove_input_functions(student_code);
    let runnable_code = remove_forever(sc_1);
    console.log(runnable_code);
    let result = Function(runnable_code);
    let result2 = Function(runnable_code);
    try {
        result();
        result2();
    } catch(e) {
        error = true;
    }

    if (soilGot && playedTone && !logicError && !wrongPins){
        pass = true;
    }

    if (error) {
        window.location.assign("/sensor-immersion-autograder/html/error.html");
    } else if (pass) {
        window.location.assign("/sensor-immersion-autograder/html/correct.html");
    } else if (logicError) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Soil_L3.1_LogicError.html");
    } else if (!playedTone) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Soil_L3.1_NoTone.html");
    } else if (wrongPins) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Soil_L3.1_WrongPins.html");
    } else {
        window.location.assign("/sensor-immersion-autograder/html/wrong.html");
    }
}

// Logic of the grader: Load all libraries from defaults and extend
// the necessary functions to establish correct responses

class basic extends BasicDefault {

    static showIcon(icon){
        num_icons += 1;
    }

    static pause(ms){
        num_pauses += 1;
    }

}

class input extends InputDefault {

}

class led extends LedDefault {
    
}

class music extends MusicDefault {

    static playTone(note, beats){
        playedTone = true;
        if (soil_value > 0.5){
            logicError = true;
        }
    }

}

class neopixel extends NeopixelDefault {
    
}

class gatorEnvironment extends GatorEnvironmentDefault {

}

class gatorMicrophone extends GatorMicrophoneDefault {
    
}

class gatorSoil extends GatorSoilDefault {

    static moisture(analog, type, power){
        if (analog == AnalogPin.P2 && power == DigitalPin.P1){
            soilGot = true;
        } else {
            wrongPins = true;
        }
        if (first == true) {
            first = false;
            return 1;
        } else {
            return 0;
        }
    }
    
    
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