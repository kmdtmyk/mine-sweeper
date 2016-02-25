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
        this.row = row;
        this.col = col;

        this.mineMap = new Array2D(map);
        this.flagMap = new Array2D(col, row, 0);
        this.openMap = new Array2D(col, row, 0);
        this.countMap = new Array2D(col, row, 0);
        
        this.countMap.map((value, x, y) => {
            return this.getAroundMineCount(x, y);
        });
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

    getCountMap(){
        return this.countMap.toArray();
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

    getAroundMineCount(x, y){
        let count = 0;
        count += this.mineMap.get(x - 1, y - 1) || 0;
        count += this.mineMap.get(x , y - 1) || 0;
        count += this.mineMap.get(x + 1, y - 1) || 0;
        count += this.mineMap.get(x - 1, y) || 0;
        count += this.mineMap.get(x + 1, y) || 0;
        count += this.mineMap.get(x - 1, y + 1) || 0;
        count += this.mineMap.get(x , y + 1) || 0;
        count += this.mineMap.get(x + 1, y + 1) || 0;
        return count;
    }


}
