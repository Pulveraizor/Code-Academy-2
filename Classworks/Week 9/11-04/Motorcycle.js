class Motorcycle extends Car {
    constructor(make, model, year, wheels) {
        super(make, model, year);
        this.wheels = wheels;
    }
    getWheelsNumber() {
        if (this.wheels == 3) {
            return 'motociklas turi ' + this.wheels + ' ratus';
        } else if (this.wheels == 2) {
            return 'motociklas turi ' + this.wheels + ' ratus';
        } else {
            return 'Kazkoks ne moticiklas';
        }
    }
}
