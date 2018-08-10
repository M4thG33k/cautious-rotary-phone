import Resource from "./classResource";
import ResourceCollectionMethod from "./classResourceCollectionMethod";

export default class ResourceCollector{
    constructor(data){
        this._resource = new Resource(data);
        this._active = false;
        this._collectionMethods = [];

        for (let i=0; i<data.collectionMethods.length; i++){
            this._collectionMethods.push(new ResourceCollectionMethod(data.collectionMethods[i]));
        }

        console.log(this);
    }


    get active() {
        return this._active;
    }

    set active(value) {
        this._active = value;
    }

    get name() {
        return this._resource.name;
    }
}