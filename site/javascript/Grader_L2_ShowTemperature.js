/**
 * 
 * Autograder for Sensor Immersion Lessson 2 - Show Temperature (New/Environmental)
 * 
 * Created: Jay Luther - 4/12/2022
 * 
 * **/



let gatorEnvInit = false;
let foreverLoop = false;
let buttonPressed = false;
let fahrenheitGot = false;
let celsiusGot = false;
let numberShown = false;


function execute_student_code() {
      var student_code = document.getElementById('sc').value;
      let sc_1 = remove_input_functions(student_code);
      let runnable_code = remove_forever(sc_1);
      let result = Function(runnable_code);
      result();
}

class basic extends BasicDefault {

    static showNumber(number){
        if (fahrenheitGot) {
            console.log("Tests Passed");
        } else if (celsiusGot) {
            console.log("Tests Passed: In Celsius");
        } else {
            console.log("Tests Failed"); 
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
            console.log("Wrong Measurement Type")
        } else {
            console.log("Gator:Environment get not called in Forever or Button Pressed Event");
        }
    }
}

class input extends InputDefault {

}

/**
 * 
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF)))
})
gatorEnvironment.beginEnvironment()
basic.showIcon(IconNames.Yes)
 * 
 * **/

/**
gatorEnvironment.beginEnvironment()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF)))
})
**/
