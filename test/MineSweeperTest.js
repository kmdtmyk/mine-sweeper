import MineSweeper from "../src/MineSweeper";


describe('array2d', () => {

    let mineSweeper;

    beforeEach(() => {
        mineSweeper = new MineSweeper();
    });

    describe('setMineMap', () => {
        let mineSweeper = new MineSweeper();
        let mineMap = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
        ];
        mineSweeper.setMineMap(mineMap);
        assert.deepEqual(mineMap, mineSweeper.getMineMap());
    });

    describe('open', () => {

        let mineSweeper;
        beforeEach(() => {
            mineSweeper = new MineSweeper();
            let mineMap = [
                [1, 1, 1],
                [1, 0, 0],
                [1, 0, 0],
            ];
            mineSweeper.setMineMap(mineMap);
        });

        it('mine cell', () => {
            mineSweeper.open(0, 0);
            assert(mineSweeper.isGameOver() === true);
        });

        it('empty cell', () => {
            mineSweeper.open(1, 1);
            assert(mineSweeper.isGameOver() === false);
            mineSweeper.open(1, 2);
            assert(mineSweeper.isGameOver() === false);
        });

        it('out of bounds index', () => {
            mineSweeper.open(100, 100);
            assert(mineSweeper.isGameOver() === false);
        });

    });

    describe('openMap', () => {


    });



});
