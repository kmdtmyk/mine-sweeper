import Util from "./Util";


export default class{


    constructor(){
        if(arguments[0] === undefined){
            return;
        }

        if(Util.isArray(arguments[0])){
            let map = arguments[0];
            this.array2d = Util.clone(map);
        }else{
            let col = arguments[0];
            let row = arguments[1];
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

    get(x, y){
        if(this.array2d[y] == undefined){
            return undefined;
        }
        return this.array2d[y][x];
    }

    set(x, y, value){
        if(this.array2d[y] == undefined){
            return;
        }
        this.array2d[y][x] = value;
    }

    toArray(){
        return Util.clone(this.array2d);
    }

    forEach(callback){
        for(var y = 0; y < this.array2d.length; y++){
            for(var x = 0; x < this.array2d[0].length; x++){
                callback(this.array2d[y][x]);
            }
        }
        return this;
    }

    sum(){
        let result = 0;
        this.forEach(function(value){
            if(!result){
                result = value;
            }else{
                result += value;
            }
        });
        return result;
    }

    map(callback){
        for(var y = 0; y < this.array2d.length; y++){
            for(var x = 0; x < this.array2d[0].length; x++){
                this.array2d[y][x] = callback(this.array2d[y][x]);
            }
        }
        return this;
    }

}
