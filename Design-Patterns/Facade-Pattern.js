class PlumbingSystem {
    setPressure(v){}
    turnOn(){}
    turnOff(){}
}

class ElectricalSystem {
    setVoltage(v){}
    turnOn(){}
    turnOff(){}
}

class House {
    plumbing = new PlumbingSystem();
    electrical = new ElectricalSystem();

    turnOnSystems(){
        this.electrical.setVoltage(120);
        this.electrical.turnOn();
        this.plumbing.setPressure(500);
        this.plumbing.turnOn();
    }

    shutdown(){
        this.electrical.turnOff();
        this.plumbing.turnOff();
    }
}

const client = new House();
client.turnOnSystems();
client.shutdown();