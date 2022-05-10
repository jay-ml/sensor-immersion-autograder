/**
 * 
 * Javascript Implementation of the Input class from Makecode. 
 * 
 * Created: Jay Luther - 4/21/2022
 * 
 * **/

class InputDefault {
	
	static acceleration(dim) {
		return;
	}

	static lightLevel() {
		return;
	}

	static compassHeading() {
		return;
	}

	static temperature() {
		return;
	}

	static soundLevel() {
		return;
	}

	static rotation(type) {
		return;
	}

	static magneticForce(dim) {

	}

	static runningTime() {
		return;
	}

	static runningTimeMicros() {
		return;
	}
}


/**
 * 
 * Helper Classes: DO NOT EDIT!
 * 
 * **/
class Dimension {

	static X = new Dimension('X');
	static Y = new Dimension('Y');
	static Z = new Dimension('Z');
	static Strength = new Dimension('Strength');

	constructor(name) {
        this.name = name;
    }
}


class Rotation {

	static Pitch = new Rotation('Pitch');
	static Roll = new Rotation('Roll');

	constructor(name) {
		this.name = name;
	}
}