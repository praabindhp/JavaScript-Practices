class Airplane {
    land() {

    }
}

class Runway {
    clear
}

class Tower {
    clearForLanding(runway, plane){
        if(runway.clear){
            console.log(`Plane ${plane} Is Clear For Landing`);
        }
    }
}

const runway25A = new Runway();
const runway25B = new Runway();
const runway7 = new Runway();

const a = new Airplane();
const b = new Airplane();
const c = new Airplane();