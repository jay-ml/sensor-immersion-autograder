/**
 * 
 * Javascript Implementation of the Basic class from Makecode. 
 * 
 * Created: Jay Luther - 4/12/2022
 * 
 * **/

class BasicDefault {

    static showNumber(number){
        return;
    }

    static showLeds(stringArray) {
        return;
    }
  
    static showIcon(iconName) {
        return;
    }

    static showString(stringName) {
        return;
    }

    static clearScreen() {
        return;
    }

    static pause(milliseconds) {
        return;
    }

    static showArrow(direction) {

    }
}

/**
 * 
 * Helper Classes: Do Not Edit!
 * 
 * **/


class IconNames {

    static Heart = new IconNames('Heart');
    static SmallHeart = new IconNames('SmallHeart');
    static Yes = new IconNames('Yes');
    static No = new IconNames('No');
    static Happy = new IconNames('Happy');
    static Sad = new IconNames('Sad');
    static Confused = new IconNames('Confused');
    static Angry = new IconNames('Angry');
    static Asleep = new IconNames('Asleep');
    static Surprised = new IconNames('Surprised');
    static Silly = new IconNames('Silly');
    static Fabulous = new IconNames('Fabulous');
    static Meh = new IconNames('Meh');
    static TShirt = new IconNames('TShirt');
    static Rollerskate = new IconNames('Rollerskate');
    static Duck = new IconNames('Duck');
    static House = new IconNames('House');
    static Tortoise = new IconNames('Tortoise');
    static Butterfly = new IconNames('Butterfly');
    static StickFigure = new IconNames('StickFigure');
    static Ghost = new IconNames('Ghost');
    static Sword = new IconNames('Sword');
    static Giraffe = new IconNames('Giraffe');
    static Skull = new IconNames('Skull');
    static Umbrella = new IconNames('Umbrella');
    static Snake = new IconNames('Snake');
    static Rabbit = new IconNames('Rabbit');
    static Cow = new IconNames('Cow');
    static QuarterNote = new IconNames('QuarterNote');
    static EigthNote = new IconNames('EigthNote');
    static Pitchfork = new IconNames('Pitchfork');
    static Target = new IconNames('Target');
    static Triangle = new IconNames('Triangle');
    static LeftTriangle = new IconNames('LeftTriangle');
    static Chessboard = new IconNames('Chessboard');
    static Diamond = new IconNames('Diamond');
    static SmallDiamond = new IconNames('SmallDiamond');
    static Square = new IconNames('Square');
    static SmallSquare = new IconNames('SmallSquare');
    static Scissors = new IconNames('Scissors');

    constructor(name) {
        this.name = name;
    }
}


class ArrowNames {

    static North = new ArrowNames('North');
    static NorthWest = new ArrowNames('NorthWest');
    static West = new ArrowNames('West');
    static SouthWest = new ArrowNames('SouthWest');
    static South = new ArrowNames('South');
    static SouthEast = new ArrowNames('SouthEast');
    static East = new ArrowNames('East');
    static NorthEast = new ArrowNames('NorthEast');

    constructor(name) {
        this.name = name;
    } 
}
