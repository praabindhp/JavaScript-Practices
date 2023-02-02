class Human{
    function (mood) {
        switch (mood) {
            case 'happy':
                console.log("I'm Very Happy :) !")
                break;

            case 'sad':
                console.log("I'm Very Sad :( !")
                break;
        
            default:
                console.log("I'm Neutral")
                break;
        }
    }
}

class Emotion {
    state

    constructor(){
        this.state = new HappyState();
    }

    think(){
        return this.state.think();
    }

    changeState(state) {
        this.state = state;
    }
}