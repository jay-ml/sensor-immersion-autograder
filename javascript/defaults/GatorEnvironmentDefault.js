/**
 * 
 * GatorEnvironment Library - Duplicated from Makecode's JS Editor
 * 
 * Created: Jay Luther - 4/12/2022
 * 
 * **/
 


 class GatorEnvironmentDefault {

    static beginEnvironment() {
        return;
    }

    static getMeasurement(value) {
        return;
    }
}

class measurementType {

    static degreesF = new measurementType('degreesF');
    static degreesC = new measurementType('degreesC');
    static humidity = new measurementType('humidity');
    static pressure = new measurementType('pressure');
    static eCO2 = new measurementType('eCO2');
    static TVOC = new measurementType('TVOC');

    constructor(name) {
        this.name = name;
    }
}