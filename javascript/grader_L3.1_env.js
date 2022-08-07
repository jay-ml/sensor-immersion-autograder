/**
 * 
 * Autograder L3.1 Env for Sensor Immersion Implementation
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
let co2Got = false;
let playedTone = false;
let logicError = false;
let co2_value = 400;
let num_icons = 0;
let num_pauses = 0;

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

    if (co2got && playedTone && num_icons >= 2 && num_pauses >= 2){
        pass = true;
    }
    if (error) {
        window.location.assign("/sensor-immersion-autograder/html/error.html");
    } else if (pass) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Env_L3.1_Correct.html");
    } else if (logicError) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Env_L3.1_LogicError.html");
    } else {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Env_L3.1_ConfirmPausesIconsLogic.html");
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
        if (co2_value > 1000){
            playedTone = true;
        } else {
            logicError = true;
        }
    }

}

class neopixel extends NeopixelDefault {
    
}

class gatorEnvironment extends GatorEnvironmentDefault {

    static getMeasurement(type){
        if (type == measurementType.eCO2){
            co2Got = true;
        }
        if (first == true) {
            first = false;
            return 400;
        } else {
            co2_value = 29206;
            return co2_value;
        }
    }

}

class gatorMicrophone extends GatorMicrophoneDefault {
    
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