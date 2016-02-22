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
        return Util.clone(this.array2d);
    }

    forEach(callback){
        for(var i = 0; i < this.array2d.length; i++){
            for(var j = 0; j < this.array2d[0].length; j++){
                callback(this.array2d[i][j]);
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
        for(var i = 0; i < this.array2d.length; i++){
            for(var j = 0; j < this.array2d[0].length; j++){
                this.array2d[i][j] = callback(this.array2d[i][j]);
            }
        }
        return this;
    }

}
