/**
 * 
 * L2.1 Soil Moisture Autograder for Sensor Immersion Implementation
 * 
 * Created: Jay Luther - 6/7/2022
 * 
 * **/

// Boolean values to establish correct / incorrect code functionality
// top four are universal, others are contextual based on the specific tutorial
let foreverLoop = false;
let buttonPressed = false;
let pass = false;
let error = false;

let soilMoistureGot = false;

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
    if (error) {
        window.location.assign("/html/error.html");
    } else if (pass) {
        window.location.assign("/html/correct.html");
    } else {
        window.location.assign("/html/wrong.html");
    }
}

// Logic of the grader: Load all libraries from defaults and extend
// the necessary functions to establish correct responses

class basic extends BasicDefault {

    static showNumber(number){
        if (soilMoistureGot) {
            pass = true;
        }
    }

}

class input extends InputDefault {

}

class led extends LedDefault {
    
}

class gatorEnvironment extends GatorEnvironmentDefault {

}

class gatorMicrophone extends GatorMicrophoneDefault {
    
}

class gatorSoil extends GatorSoilDefault {

    static moisture(measurement, type, power) {
        if (measurement == AnalogPin.P2 && power == DigitalPin.P1){
            soilMoistureGot = true;
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