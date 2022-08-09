/**
 * 
 * Javascript Implementation of the Neopixel Extension from Makecode. 
 * 
 * Created: Jay Luther - 7/11/2022
 * 
 * **/
 

 class NeopixelDefault {

    static create(pin, leds, mode) {
        return new NeopixelDefault(pin, leds);
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

    constructor(pin, leds){
        this.pin = pin;
        this.numLEDs = leds;

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