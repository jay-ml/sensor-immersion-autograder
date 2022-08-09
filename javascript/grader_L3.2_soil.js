/**
 * 
 * Autograder L3.2 Soil for Sensor Immersion Implementation
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

let ledCreated = false;
let brightnessSet = false;
let moistureGot = false;
let moistureShown = false;
let screenCleared = false;
let first = true;

let wrongPins = false;
let wrongPinsSoil = false;
let logicError = false;

// Calls to execute student code, should be the same in every grader_L#.#_<sensor>.js file
function execute_student_code() {
    var student_code = document.getElementById('sc').value;
    let sc_1 = remove_input_functions(student_code);
    let runnable_code = remove_forever(sc_1);
    runnable_code = runnable_code.replace(": neopixel.Strip", "");
    let result = Function(runnable_code);
    try {
        result();
    } catch(e) {
        error = true;
        console.log(e);
    }

    if (ledCreated && brightnessSet && moistureShown && screenCleared){
        pass = true;
    }

    if (error) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Soil_L3.2_NoInit.html");
    } else if (pass) {
        window.location.assign("/sensor-immersion-autograder/html/correct.html");
    } else if (wrongPins) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Soil_L3.2_WrongPinsLed.html");
    } else if (wrongPinsSoil) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Soil_L3.2_WrongPinsSoil.html");
    } else if (logicError) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Soil_L3.2_LogicError.html");
    } else if (!brightnessSet) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Soil_L3.2_TooBright.html");
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

    static create(dataPin, numLEDs, mode){
        ledCreated = true;
        if (dataPin != DigitalPin.P12 || numLEDs != 5){
            wrongPins = true;
        }
        return new neopixel(dataPin, numLEDs);
    }

    setBrightness(value){
        if (value == 50){
            brightnessSet = true;
        }
    }

    showBarGraph(value, max){
        if (moistureGot){
            moistureShown = true;
        }
    }

    constructor(pin, leds){
        super(pin, leds);
    }
    
}

class gatorEnvironment extends GatorEnvironmentDefault {

}

class gatorMicrophone extends GatorMicrophoneDefault {
    
}

class gatorSoil extends GatorSoilDefault {

    static moisture(analog, type, power){
        if (analog == AnalogPin.P2 && power == DigitalPin.P1){
            if (first){
                first = false;
                return 0;
            } else {
                moistureGot = true;
            }
            if (!moistureGot){
                logicError = true;
            }
        } else {
            wrongPinsSoil = true;
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