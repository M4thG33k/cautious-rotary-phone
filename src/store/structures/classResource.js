export default class Resource {
    constructor(data) {
        this._amount = 0;
        this._name = data.name;
    }


    get amount() {
        return this._amount;
    }

    get name() {
        return this._name;
    }

    incrementBy(amount) {
        this._amount += amount;
    }
}