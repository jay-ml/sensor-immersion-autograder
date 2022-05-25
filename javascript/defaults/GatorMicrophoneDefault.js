/**
 * 
 * GatorMicrophone Library - Duplicated from Makecode's JS Editor
 * 
 * Created: Jay Luther - 5/24/2022
 * 
 * **/
 


 class GatorMicrophoneDefault {

    static getSoundIntensity() {
        return;
    }

    static readGateData() {
        return;
    }

    static setGain(value) {
    	return;
    }
}

class GainOptions {

    static Two_Thirds = new GainOptions('Two_Thirds');
    static One = new GainOptions('One');
    static Two = new GainOptions('Two');
    static Four = new GainOptions('Four');
    static Eight = new GainOptions('Eight');
    static Sixteen = new GainOptions('Sixteen');

    constructor(name) {
        this.name = name;
    }
}