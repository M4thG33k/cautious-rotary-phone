import Resource from "../structures/classResource";

export default class ResourceManager {
    constructor() {
        this._resources = {};

        let temp = require("../data/resources.json");
        if (typeof temp === 'object') {
            temp = temp.resources;
            for (let key in temp) {
                if (temp.hasOwnProperty(key)) {
                    this._resources[key] = new Resource(temp[key]);
                }
            }
        }
    }
}