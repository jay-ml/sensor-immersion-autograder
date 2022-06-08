/**
 * 
 * Autograder for Sensor Immersion Lessson 2 - Show Temperature 
 *              (Lesson2/New/Environmental/environmental.md)
 * 
 * Created: Jay Luther - 4/12/2022
 * 
 * **/

// Boolean values to establish correct / incorrect code functionality
let gatorEnvInit = false;
let foreverLoop = false;
let buttonPressed = false;
let fahrenheitGot = false;
let celsiusGot = false;

let pass = false;
let partialPass = false;
let error = false;


function execute_student_code() {
    var student_code = document.getElementById('sc').value;
    let sc_1 = remove_input_functions(student_code);
    let runnable_code = remove_forever(sc_1);
    let result = Function(runnable_code);
    try {
        result();
    } catch(e) {
        error = true;
        console.log(e);
    }
    if (error) {
        window.location.assign("/html/error.html");
    } else if (pass || partialPass) {
        window.location.assign("/html/correct.html");
    } else {
        window.location.assign("/html/wrong.html");
    }
}

// Logic of the grader: Load all libraries from defaults and extend
// the necessary functions to establish correct responses
class basic extends BasicDefault {

    static showNumber(number){
        if (fahrenheitGot) {
            console.log("Tests Passed");
            pass = true;
        } else if (celsiusGot) {
            console.log("Tests Passed: In Celsius");
            partialPass = true;
        } 
    }
}

class gatorEnvironment extends GatorEnvironmentDefault {

    static beginEnvironment() {
        console.log("Gator:bit Initialized");
        gatorEnvInit = true;
        return
    }

    static getMeasurement(value) {
        if (!gatorEnvInit){
            console.log("Gator Environment Not Initialized");
        } else if (value == measurementType.degreesF && (foreverLoop || buttonPressed)){
            console.log("Got the measurement in Fahrenheit");
            fahrenheitGot = true;
            return
        } else if (value == measurementType.degreesC && (foreverLoop || buttonPressed)) {
            console.log("Got the measurement in Celsius");
            celsiusGot = true;
            return
        } else if (foreverLoop || buttonPressed) {
            console.log("Another Measurement Received in Correct Place")
        } else {
            console.log("Gator:Environment get not called in Forever or Button Pressed Event");
        }
    }
}

class input extends InputDefault {

}

class led extends LedDefault {
    
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