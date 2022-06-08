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

 }

 music.playMelody("C5 B A G F E D C ", 120)
music.playTone(262, music.beat(BeatFraction.Whole))
music.ringTone(262)
music.rest(music.beat(BeatFraction.Half))
music.setVolume(127)
music.stopAllSounds()
music.changeTempoBy(20)
music.setTempo(120)
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
