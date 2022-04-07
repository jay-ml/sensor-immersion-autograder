

function execute_student_code() {
      var student_code = document.getElementById('sc').value;
      let result = Function(student_code);
      result();
}


class gatorEnvironment {

    static beginEnvironment() {
        console.log("Gator:bit Initialized");
        return
    }

    static getMeasurement(value) {
        if (value == "measurementType.degreesF"){
            console.log("Got the measurement in Fahrenheit");
            return
        } else if (value == "measurementType.degreesC") {
            console.log("Got the measurement in Celsius");
            return
        } else {
            console.log("Gator:Environment not initialized");
        }
    }
}


class basic {
  
    static showIcon(iconName) {
        return
    }
  
    static showNumber(number){
        console.log("Show Number: " + number);
    }

    static forever () {
        return
    }
}


class IconNames {

    static Yes = new IconNames('Yes');
    // add all of the listed icons from Makecode

    constructor(name) {
        this.name = name;
    }
}

/**
gatorEnvironment.beginEnvironment()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF)))
})
**/
