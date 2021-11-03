class Movie {
    constructor(name, year, director, budget, income) {
        this.name = name;
        this.year = year;
        this.director = director;
        this.budget = budget;
        this.income = income;
    }
    getIntroduction() {
        return `${this.name}, ${this.year}, ${this.director}`;
    }
    getProfit() {
        return 'The profit was ' + (this.income - this.budget) + ' US dollars';
    }
}