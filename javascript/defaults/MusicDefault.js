/**
 * 
 * Javascript Implementation of the LED class from Makecode. 
 * 
 * Created: Jay Luther - 6/6/2022
 * 
 * **/
 
// NOT FINISHED
 class MusicDefault {

    static playMelody(noteString, bpm) {
        return;
    }

    static playTone(number, beatfraction) {
        return;
    }

    static playSoundEffect(soundEffect, playMode) {
        return;
    }

    static createSoundEffect(waveShape, x1, x2, x3, x4, x5, effect, curve) {
        return;
    }

    static rest(ms) {
        return;
    }

    static setVolume(value) {
        return;
    }

    static stopMelody(option) {
        return;
    }

    static stopAllSounds() {
        return;
    }

    static changeTempoBy(bpm) {
        return;
    }

    static setTempo(bpm) {
        return;
    }

    static setBuildInSpeakerEnabled(bool) {
        return;
    }

    static startMelody(melody) {
        return;
    }

    static builtInMelody(melody) {
        return;
    }

    static beat(fraction) {
        return;
    }

    static builtinSoundEffect(sound) {
        return;
    }

    static volume() {
        return;
    }

    static tempo() {
        return;
    }

}

class BeatFraction {

    static Whole = new BeatFraction('Whole');
    static Half = new BeatFraction('Half');
    static Quarter = new BeatFraction('Quarter');
    static Eighth = new BeatFraction('Eighth');
    static Sixteenth = new BeatFraction('Sixteenth');
    static Double = new BeatFraction('Double');
    static Breve = new BeatFraction('Breve');

    constructor(name) {
        this.name = name;
    }

}


class WaveShape {

    static Sine = new WaveShape('Sine');
    static Square = new WaveShape('Square');
    static Sawtooth = new WaveShape('Sawtooth');
    static Triangle = new WaveShape('Triangle');
    static Noise = new WaveShape('Noise');

    constructor(name) {
        this.name = name;
    }
}

class SoundExpressionEffect {

    static None = new SoundExpressionEffect('None');
    static Vibrato = new SoundExpressionEffect('Vibrato');
    static Tremolo = new SoundExpressionEffect('Tremolo');
    static Warble = new SoundExpressionEffect('Warble');

    constructor(name) {
        this.name = name;
    }
}

class InterpolationCurve {

    static Linear = new InterpolationCurve('Linear');
    static Curve = new InterpolationCurve('Curve');
    static Logarithmic = new InterpolationCurve('Logarithmic');

    constructor(name) {
        this.name = name;
    }
}

class SoundExpressionPlayMode {

    static UntilDone = new SoundExpressionPlayMode('UntilDone');
    static InBackground = new SoundExpressionPlayMode('InBackground');

    constructor(name) {
        this.name = name;
    }
}


class Melodies {

    static Dadadadum = new Melodies('Dadadadum');
    static Entertainer = new Melodies('Entertainer');
    static Prelude = new Melodies('Prelude');
    static Ode = new Melodies('Ode');
    static Nyan = new Melodies('Nyan');
    static Ringtone = new Melodies('Ringtone');
    static Funk = new Melodies('Funk');
    static Blues = new Melodies('Blues');
    static Birthday = new Melodies('Birthday');
    static Wedding = new Melodies('Wedding');
    static Funeral = new Melodies('Funeral');
    static Punchline = new Melodies('Punchline');
    static Baddy = new Melodies('Baddy');
    static Chase = new Melodies('Chase');
    static BaDing = new Melodies('BaDing');
    static Wawawawaa = new Melodies('Wawawawaa');
    static JumpUp = new Melodies('JumpUp');
    static JumpDown = new Melodies('JumpDown');
    static PowerUp = new Melodies('PowerUp');
    static PowerDown = new Melodies('PowerDown');

    constructor(name) {
        this.name = name;
    }
}


class MelodyOptions {

    static Once = new MelodyOptions('Once');
    static Forever = new MelodyOptions('Forever');
    static OnceInBackground = new MelodyOptions('OnceInBackground');
    static ForeverInBackground = new MelodyOptions('ForeverInBackground');
    

    constructor(name) {
        this.name = name;
    }
}


class MelodyStopOptions {

    static All = new MelodyStopOptions('All');
    static Foreground = new MelodyStopOptions('Foreground');
    static Background = new MelodyStopOptions('Background');

    constructor(name) {
        this.name = name;
    }
}


class soundExpression {

    static giggle = new soundExpression('giggle');
    static happy = new soundExpression('happy');
    static hello = new soundExpression('hello');
    static mysterious = new soundExpression('mysterious');
    static sad = new soundExpression('sad');
    static slide = new soundExpression('slide');
    static soaring = new soundExpression('soaring');
    static spring = new soundExpression('spring');
    static twinkle = new soundExpression('twinkle');
    static yawn = new soundExpression('yawn');

    constructor(name) {
        this.name = name;
    }
}