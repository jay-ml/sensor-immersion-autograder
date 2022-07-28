/**
 * 
 * Autograder L3.2 Mic for Sensor Immersion Implementation
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

let neopixelInit = false;
let screenCleared = false;
let soundGot = false;
let soundShown = false;
let first = true;

// Calls to execute student code, should be the same in every grader_L#.#_<sensor>.js file
function execute_student_code() {
    var student_code = document.getElementById('sc').value;
    let sc_1 = remove_input_functions(student_code);
    let runnable_code = remove_forever(sc_1);
    let result = Function(runnable_code);
    try {
        result();
    } catch(e) {
        error = true;
    }

    if (screenCleared && neopixelInit && soundShown){
        pass = true;
    }

    if (error) {
        window.location.assign("/sensor-immersion-autograder/html/error.html");
    } else if (pass) {
        window.location.assign("/sensor-immersion-autograder/html/correct.html");
    } else {
        window.location.assign("/sensor-immersion-autograder/html/wrong.html");
    }
}

// Logic of the grader: Load all libraries from defaults and extend
// the necessary functions to establish correct responses

class basic extends BasicDefault {

    static clearScreen(){
        screenCleared = true;
    }

}

class input extends InputDefault {

}

class led extends LedDefault {
    
}

class music extends MusicDefault {

}

class neopixel extends NeopixelDefault {

    static create(pin, leds, mode){
        if (pin == DigitalPin.P12 && leds == 5){
            neopixelInit = true;
        }
    }

    showBarGraph(measured, max){
        if (soundGot){
            soundShown = true;
        }
    }
    
}

class gatorEnvironment extends GatorEnvironmentDefault {

}

class gatorMicrophone extends GatorMicrophoneDefault {

    static getSoundIntensity(){
        if (first){
            first = false;
            return 1000;
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