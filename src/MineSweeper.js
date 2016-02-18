import Array2D from "./Array2D";

export default class{


    constructor(){
        this.mineMap;
        this.flagMap;
        this.openMap;
        this.gameOver = false;
        // this.
    }

    setMineMap(map){
        let row = map.length;
        let col = map[0].length;

        this.mineMap = new Array2D(row, col, 0);
        for(let i = 0; i < row; i++){
            for(let j = 0; j < col; j++){
                this.mineMap.set(i, j, map[i][j]);
            }
        }

        this.flagMap = new Array2D(row, col, 0);
        this.openMap = new Array2D(row, col, 0);
    }

    getMineMap(){
        return this.mineMap.toArray();
    }

    getMineCount(){

    }

    getFlagCount(){

    }

    getOpenCount(){

    }

    open(y, x){
        this.openMap.set(y, x);
        if(this.mineMap.get(y, x) == 1){
            this.gameOver = true;
        }
    }

    openAround(){

    }

    isGameOver(){
        return this.gameOver;
    }

    // constructor(row, col, value){
    //     this.array2d = [];
    //     for(var i = 0; i < row; i++){
    //         var array = [];
    //         for(var j = 0; j < col; j++){
    //             array.push(value);
    //         }
    //         this.array2d.push(array);
    //     }
    // }
    //
    // get(y, x){
    //     if(this.array2d[y] == undefined){
    //         return undefined;
    //     }
    //     return this.array2d[y][x];
    // }
    //
    // set(y, x, value){
    //     if(this.array2d[y] == undefined){
    //         return;
    //     }
    //     this.array2d[y][x] = value;
    // }
    //
    // toArray(){
    //     return JSON.parse(JSON.stringify(this.array2d));
    // }


}
