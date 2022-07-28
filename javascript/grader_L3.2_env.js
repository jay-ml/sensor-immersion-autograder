/**
 * 
 * Autograder L3.2 Env for Sensor Immersion Implementation
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

let stringShown = false;
let measurementGot = false;
let measurementShown = false;
let switchThrown = false;

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
    if (stringShown && measurementGot && measurementShown){
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

    static showString(s){
        stringShown = true;
    }

    static showNumber(num){
        if (measurementGot){
            measurementShown = true;
        }
    }

}

class input extends InputDefault {

}

class led extends LedDefault {
    
}

class music extends MusicDefault {

}

class neopixel extends NeopixelDefault {
    
}

class gatorEnvironment extends GatorEnvironmentDefault {

    static getMeasurement(type){
        if (type == measurementType.humidity || type == measurementType.pressure){
            measurementGot = true;
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