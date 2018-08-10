import ResourceCollector from "../structures/classResourceCollector";
import _ from "lodash";

export default class ResourceManager {
    constructor() {
        this._resourceCollectors = {};

        let temp = require("../data/resources.json");
        if (typeof temp === 'object') {
            temp = temp.resources;
            for (let key in temp) {
                if (temp.hasOwnProperty(key)) {
                    console.log(temp[key]);
                    this._resourceCollectors[key] = new ResourceCollector(temp[key]);
                }
            }
        }

        this._resourceCollectors["resWood"].active = true;
    }

    get activeResources() {
        return _.pickBy(this._resourceCollectors, x => x.active);
    }

    get resources(){
        return this._resourceCollectors;
    }
}