class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getIntroduction() {
        return `${this.make} ${this.model}`;
    }
    getAge() {
        let today = new Date;
        return (today.getFullYear() - this.year <= 10 ? 'Automobiliui yra 10 metų arba naujesnis' : 'Automobiliui yra 11 metų arba senesnis');
    }
}