/**
 * 
 * Javascript Implementation of the Neopixel Extension from Makecode. 
 * 
 * Created: Jay Luther - 7/11/2022
 * 
 * **/
 

 class NeopixelDefault {

    static create(pin, leds, mode) {
        constructor();
    }

    static colors(color) {
        return;
    }

    static hsl(hue, saturation, luminosity) {
        return;
    }

    static rgb(red, green, blue) {
        return;
    }

    range(first, numLEDs) {
        return;
    }

    showRainbow(first, last) {
        return;
    }

    showColor(color) {
        return;
    }

    showBarGraph(low, high) {
        return;
    }

    show() {
        return;
    }

    clear() {
        return;
    }

    shift(value) {
        return;
    }

    rotate(value) {
        return;
    }

    setPixelWhiteLED(from, to) {
        return;
    }

    setPixelColor(index, color) {
        return;
    }

    setBrightness(value) {
        return;
    }

    easeBrightness() {
        return;
    }

    setMatrixWidth(value) {
        return;
    }

    setMatrixColor(x, y, color) {
        return;
    }

    length() {
        return;
    }

    power() {
        return;
    }

 }


// Helper Classes

class NeoPixelMode {

    static RGB = new NeoPixelMode('RGB');
    static RGBW = new NeoPixelMode('RGBW');
    static RGB_RGB = new NeoPixelMode('RGB_RGB');

    constructor(name) {
        this.name = name;
    }
}

class NeoPixelColors {

    static Red = new NeoPixelColors('Red');
    static Orange = new NeoPixelColors('Orange');
    static Yellow = new NeoPixelColors('Yellow');
    static Green = new NeoPixelColors('Green');
    static Blue = new NeoPixelColors('Blue');
    static Indigo = new NeoPixelColors('Indigo');
    static Violet = new NeoPixelColors('Violet');
    static Purple = new NeoPixelColors('Purple');
    static White = new NeoPixelColors('White');
    static Black = new NeoPixelColors('Black');
    
    constructor(name) {
        this.name = name;
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