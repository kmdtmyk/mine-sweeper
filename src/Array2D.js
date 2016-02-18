

export default class{


    constructor(){
        if(arguments[0] === undefined){
            return;
        }

        if(this._isArray(arguments[0])){
            let map = arguments[0];
            this.array2d = this._cloneObject(map);
        }else{
            let row = arguments[0];
            let col = arguments[1];
            let value = arguments[2];

            this.array2d = [];
            for(var i = 0; i < row; i++){
                var array = [];
                for(var j = 0; j < col; j++){
                    array.push(value);
                }
                this.array2d.push(array);
            }
        }

    }

    get(y, x){
        if(this.array2d[y] == undefined){
            return undefined;
        }
        return this.array2d[y][x];
    }

    set(y, x, value){
        if(this.array2d[y] == undefined){
            return;
        }
        this.array2d[y][x] = value;
    }

    toArray(){
        return this._cloneObject(this.array2d);
    }

    _isArray(object) {
        return Object.prototype.toString.call(object) === '[object Array]';
    }

    _cloneObject(object){
        return JSON.parse(JSON.stringify(object));
    }


}
