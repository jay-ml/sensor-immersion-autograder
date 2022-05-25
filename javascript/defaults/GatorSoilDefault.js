/**
 * 
 * GatorSoil Library - Duplicated from Makecode's JS Editor
 * 
 * Created: Jay Luther - 5/24/2022
 * 
 * **/
 


 class GatorSoilDefault {

    static moisture(measurement, type, power) {
        return;
    }
}

class AnalogPin {

    static P0 = new AnalogPin('P0');
    static P1 = new AnalogPin('P1');
    static P2 = new AnalogPin('P2');
    static P3 = new AnalogPin('P3');
    static P4 = new AnalogPin('P4');
    static P5 = new AnalogPin('P5');
    static P6 = new AnalogPin('P6');
    static P7 = new AnalogPin('P7');
    static P8 = new AnalogPin('P8');
    static P9 = new AnalogPin('P9');
    static P10 = new AnalogPin('P10');
    static P11 = new AnalogPin('P11');
    static P12 = new AnalogPin('P12');
    static P13 = new AnalogPin('P13');
    static P14 = new AnalogPin('P14');
    static P15 = new AnalogPin('P15');
    static P16 = new AnalogPin('P16');

    constructor(name) {
        this.name = name;
    }
}

class GatorSoilType {

	static Moisture = new GatorSoilType('Moisture');
	static ADCValue = new GatorSoilType('ADCValue');

    constructor(name) {
        this.name = name;
    }
}

class DigitalPin {

	static P0 = new DigitalPin('P0');
	static P1 = new DigitalPin('P1');
	static P2 = new DigitalPin('P2');
	static P3 = new DigitalPin('P3');
	static P4 = new DigitalPin('P4');
	static P5 = new DigitalPin('P5');
	static P6 = new DigitalPin('P6');
	static P7 = new DigitalPin('P7');
	static P8 = new DigitalPin('P8');
	static P9 = new DigitalPin('P9');
	static P10 = new DigitalPin('P10');
	static P11 = new DigitalPin('P11');
	static P12 = new DigitalPin('P12');
	static P13 = new DigitalPin('P13');
	static P14 = new DigitalPin('P14');
	static P15 = new DigitalPin('P15');
	static P16 = new DigitalPin('P16');

    constructor(name) {
        this.name = name;
    }

}