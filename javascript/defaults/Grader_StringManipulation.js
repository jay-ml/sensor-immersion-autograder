/**
 * 
 * Functions that take the student code and prepare it for execution
 * in the autograder environment.
 * 
 * Created: Jay Luther - 4/12/2022
 * 
 * **/


/**
 * Removes the forever functions, so the student code can be executed.
 * Replaces the function declarations with boolean logic; this is 
 * then used in the autograder's logic to establish correct behavior.
 * **/
function remove_forever(student_code) {
    let foreverIndex = student_code.indexOf("basic.forever(function () {")
    if (foreverIndex != -1) {
        let sc_1 = student_code.replace("basic.forever(function () {","foreverLoop = true;");
        let sc_2 = sc_1.replace(": neopixel.Strip","");
        let bracketIndex = sc_2.indexOf("})", foreverIndex);
        let altered_code = sc_2.substring(0,bracketIndex) + 
                            "foreverLoop = false;" + 
                            sc_2.substring(bracketIndex+2)

        altered_code = sc_2.replace("})","foreverLoop = false;");
        return altered_code;
    }
    return student_code; 
}


/**
 * Relocate the button presses from the top of the string student_code
 * to the bottom. This ensures the blocks in on_start are executed first.
 * 
 * Note: "buttonEnd + 2" -> because buttonEnd is the beginning of "})" 
 *        and we want the end of the string, not the beginning
 * **/
function remove_buttons(student_code) {

    // if no button, simply return the input
    let buttonIndex = student_code.indexOf("input.onButtonPressed(");
    if (buttonIndex == -1) {
        return student_code;
    }

    let count = (student_code.match(/input.on/g) || []).length;
    let altered_code = student_code;

    // slight switch with an unusual string allows me to replace with boolean 
    // logic at the bottom of the code, while ignoring other events (loops, forever)
    let count_var = count;
    let endIndex = 0;
    while (count_var != 0){
        if (count_var == 1) {
            endIndex = altered_code.indexOf("})") + 2
        }
        altered_code = altered_code.replace("})","}]")
        count_var -= 1;
    }

    altered_code = altered_code.substring(endIndex) +
                    altered_code.substring(0,endIndex);

    //replace all button headers with boolean = true
    altered_code = replace_input_headers(altered_code);

    while (count != 0) {
        altered_code = altered_code.replace("}]","buttonPressed = false;");
        count -= 1;
    } 

    return altered_code;
}

function replace_input_headers(code) {
    code = code.replace("input.onButtonPressed(Button.A, function () {",";buttonPressed = true;");
    code = code.replace("input.onButtonPressed(Button.AB, function () {",";buttonPressed = true;");
    code = code.replace("input.onButtonPressed(Button.B, function () {",";buttonPressed = true;");

    code = code.replace("input.onGesture(Gesture.Shake, function () {",";buttonPressed = true;");
    code = code.replace("input.onGesture(Gesture.LogoUp, function () {",";buttonPressed = true;");
    code = code.replace("input.onGesture(Gesture.ScreenUp, function () {",";buttonPressed = true;");
    code = code.replace("input.onGesture(Gesture.LogoDown, function () {",";buttonPressed = true;");
    code = code.replace("input.onGesture(Gesture.FreeFall, function () {",";buttonPressed = true;");
    code = code.replace("input.onGesture(Gesture.TiltLeft, function () {",";buttonPressed = true;");
    code = code.replace("input.onGesture(Gesture.ScreenDown, function () {",";buttonPressed = true;");
    code = code.replace("input.onGesture(Gesture.TiltRight, function () {",";buttonPressed = true;");
    code = code.replace("input.onGesture(Gesture.EightG, function () {",";buttonPressed = true;");
    code = code.replace("input.onGesture(Gesture.SixG, function () {",";buttonPressed = true;");
    code = code.replace("input.onGesture(Gesture.ThreeG, function () {",";buttonPressed = true;");

    code = code.replace("input.onPinPressed(TouchPin.P0, function () {",";buttonPressed = true;");
    code = code.replace("input.onPinPressed(TouchPin.P1, function () {",";buttonPressed = true;");
    code = code.replace("input.onPinPressed(TouchPin.P2, function () {",";buttonPressed = true;");

    code = code.replace("input.onSound(DetectedSound.Loud, function () {",";buttonPressed = true;");
    code = code.replace("input.onSound(DetectedSound.Quiet, function () {",";buttonPressed = true;");

    code = code.replace("input.onLogoEvent(TouchButtonEvent.LongPressed, function () {",";buttonPressed = true;");
    code = code.replace("input.onLogoEvent(TouchButtonEvent.Touched, function () {",";buttonPressed = true;");
    code = code.replace("input.onLogoEvent(TouchButtonEvent.Pressed, function () {",";buttonPressed = true;");
    code = code.replace("input.onLogoEvent(TouchButtonEvent.Released, function () {",";buttonPressed = true;");

    return code;
}


/**
 * Removes the button presses similar to the remove_forever function.
 * Replaces these lines with boolean logic true / false statements, to
 * be used in the autograder's logic.
 * **/
function remove_input_functions(student_code) {
    let sc_1 = remove_buttons(student_code);
    return sc_1;
}