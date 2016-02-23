import Array2D from "./Array2D";


export default class{

    constructor(){
        this.mineMap;
        this.flagMap;
        this.openMap;
        this.countMap;
        this.gameOver = false;
    }

    setMineMap(map){
        let row = map.length;
        let col = map[0].length;

        this.mineMap = new Array2D(map);
        this.flagMap = new Array2D(row, col, 0);
        this.openMap = new Array2D(row, col, 0);
        this.countMap = new Array2D(row, col, 0);
    }

    getMineMap(){
        return this.mineMap.toArray();
    }

    getOpenMap(){
        return this.openMap.toArray();
    }

    getFlagMap(){
        return this.flagMap.toArray();
    }

    getMineCount(){
        return this.mineMap.sum();
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

    openAround(y, x){

    }

    isGameOver(){
        return this.gameOver;
    }


}
