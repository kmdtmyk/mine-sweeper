

export default class{

    constructor(){

    }

    static isArray(object) {
        return Object.prototype.toString.call(object) === '[object Array]';
    }

    static clone(object){
        return JSON.parse(JSON.stringify(object));
    }

}
