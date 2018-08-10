export default class ResourceCollectionMethod {
    constructor(data) {
        this._name = data.name;
        this._yield = data.yield;
        this._time = data.time;
    }


    get name() {
        return this._name;
    }

    get yield() {
        return this._yield;
    }

    get time() {
        return this._time;
    }
}
