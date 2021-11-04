class Motorcycle extends Car {
    constructor(make, model, year, wheels) {
        super(make, model, year);
        this.wheels = wheels;
    }
    getWheelsNumber() {
        return 'motociklas turi ' + this.wheels + ' ratus';
    }
}
