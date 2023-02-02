class HotDog {
    constructor(
        bun,
        ketchup,
        mustard,
        kraut
    ){}

    addKetchup(){
        this.ketchup = true;
        return this;
    }

    addMustard(){
        this.mustard = true;
        return this;
    }

    addKraut(){
        this.kraut = true;
        return this;
    }
}

// const lunch = new HotDog('Wheat', false, true, true);

const lunch = new HotDog('Gluten Free')

lunch.addKetchup();
lunch.addMustard();
lunch.addKraut();

console.log(lunch)