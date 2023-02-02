class IOSButton {

}

class AndroidButton {

}

const button1 = os === 'ios' ? new IOSButton() : new AndroidButton()

const button2 = os === 'ios' ? new IOSButton() : new AndroidButton()

class ButtonFactory {
    createButton(os) {
        if(os === 'ios'){
            return new IOSButton();
        } else {
            return new AndroidButton();
        }
    }
}

const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(ios);