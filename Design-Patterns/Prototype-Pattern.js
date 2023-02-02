const zombie = {

    eatBrains() {
        return 'Yummy Brain';
    }
    
}

const chad = Object.create(zombie, {name: {value : 'chad'}});

console.log(chad);

chad.eatBrains();

chad.__proto__;

Object.getPrototypeOf(chad);