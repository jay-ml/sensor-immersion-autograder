/**
 * 
 * Autograder for Sensor Immersion Lessson 2 - Show Temperature, CO2, and Humidity
 *              (Lesson2/New/Environmental/environmental.md)
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

let gatorEnvInit = false;
let numberOfMeasurements = 0;
let tempCGot = false;
let tempFGot = false;
let humidityGot = false;
let vocsGot = false;
let coGot = false;
let pressureGot = false;

let duplicateGot = false;

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
        console.log(e);
        console.log(runnable_code);
    }
    if (error) {
        window.location.assign("/sensor-immersion-autograder/html/error.html");
    } else if (pass) {
        window.location.assign("/sensor-immersion-autograder/html/correct.html");
    } else if (partialPass) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Env_Celsius.html");
    } else if (!gatorEnvInit) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Env_NoInit.html");
    } else if (numberOfMeasurements < 3 || duplicateGot) {
        window.location.assign("/sensor-immersion-autograder/html/feedback/Env_FewerMeasurements.html");
    }
    else {
        window.location.assign("/sensor-immersion-autograder/html/wrong.html");
    }
}

// Logic of the grader: Load all libraries from defaults and extend
// the necessary functions to establish correct responses


class basic extends BasicDefault {

	static showNumber(number){
        if (numberOfMeasurements >= 3 && duplicateGot == false) {
            if (tempCGot && !tempFGot){
                console.log("Tests Passed with Celsius");
                partialPass = true;
            } else {
                console.log("Tests Passed");
                pass = true;  
            }
        }
    }

}

class input extends InputDefault {

}

class led extends LedDefault {

}

class music extends MusicDefault {
    
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
        } else if (buttonPressed) {
        	if (value == measurementType.degreesC) {
        		if (!tempCGot){
        			numberOfMeasurements += 1;
        			tempCGot = true;
        		} else {
        			duplicateGot = true;
        		}
        	} else if (value == measurementType.degreesF) {
        		if (!tempFGot){
        			numberOfMeasurements += 1;
        			tempFGot = true;
        		} else {
        			duplicateGot = true;
        		}
        	} else if (value == measurementType.humidity) {
        		if (!humidityGot){
        			numberOfMeasurements += 1;
        			humidityGot = true;
        		} else {
        			duplicateGot = true;
        		}
        	} else if (value == measurementType.pressure) {
        		if (!pressureGot){
        			numberOfMeasurements += 1;
        			pressureGot = true;
        		} else {
        			duplicateGot = true;
        		}
        	} else if (value == measurementType.eCO2) {
        		if (!coGot){
        			numberOfMeasurements += 1;
        			coGot = true;
        		} else {
        			duplicateGot = true;
        		}
        	} else if (value == measurementType.TVOC) {
        		if (!vocsGot){
        			numberOfMeasurements += 1;
        			vocsGot = true;
        		} else {
        			duplicateGot = true;
        		}
        	}

        }
    }

}

class gatorMicrophone extends GatorMicrophoneDefault {
    
}

class gatorSoil extends GatorSoilDefault {
    
}

class neopixel extends NeopixelDefault {

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