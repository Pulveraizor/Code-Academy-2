class User {
    constructor(name) {
        this.name = 'The OG';
    }
    get safeName() {
        return this.name;
    }
    set safeName(otherName) {
        return this.otherName;
    }
}