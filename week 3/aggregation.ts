class Engine {
    start(){
        console.log("engine started");
    }
}

class Car {
    engine: Engine

    constructor(engine: Engine){
        this.engine = engine;
    }

    startCar(){
        console.log("car started");
        this.engine.start();
    }
}

const engine = new Engine();
const car = new Car(engine);
car.startCar();