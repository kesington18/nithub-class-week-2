var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        console.log("engine started");
    };
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.startCar = function () {
        console.log("car started");
        this.engine.start();
    };
    return Car;
}());
var engine = new Engine();
var car = new Car(engine);
car.startCar();
