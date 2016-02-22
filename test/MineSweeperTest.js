import MineSweeper from "../src/MineSweeper";


describe('array2d', function(){

    let mineSweeper;

    beforeEach(function(){
        mineSweeper = new MineSweeper();
    });

    it('setMineMap', function(){
        let mineMap = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
        ];
        mineSweeper.setMineMap(mineMap);
        assert.deepEqual(mineMap, mineSweeper.getMineMap());
    });

    describe('open', function(){

        beforeEach(function(){
            let mineMap = [
                [1, 1, 1],
                [1, 0, 0],
                [1, 0, 0],
            ];
            mineSweeper.setMineMap(mineMap);
        });

        it('mine cell', function(){
            mineSweeper.open(0, 0);
            assert(mineSweeper.isGameOver() === true);
        });

        it('empty cell', function(){
            mineSweeper.open(1, 1);
            assert(mineSweeper.isGameOver() === false);
            mineSweeper.open(1, 2);
            assert(mineSweeper.isGameOver() === false);
        });

        it('out of bounds index', function(){
            mineSweeper.open(100, 100);
            assert(mineSweeper.isGameOver() === false);
        });

    });

    describe('openMap', function(){


    });

    xit('getMineCount', function(){
        mineSweeper.setMineMap([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
        assert(mineSweeper.getMineCount() === 0);

        mineSweeper.setMineMap([
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
        ]);
        assert(mineSweeper.getMineCount() === 12);

        mineSweeper.setMineMap([
            [0, 1, 0, 0],
            [0, 0, 0, 0],
            [1, 0, 0, 1],
        ]);
        assert(mineSweeper.getMineCount() === 3);
    });



});
