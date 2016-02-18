

export default class{


    constructor(row, col, value){
        this.array2d = [];
        for(var i = 0; i < row; i++){
            var array = [];
            for(var j = 0; j < col; j++){
                array.push(value);
            }
            this.array2d.push(array);
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
        return JSON.parse(JSON.stringify(this.array2d));
    }


}
