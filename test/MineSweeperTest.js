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

        it('mine cell', function(){

        });

    });

    describe('gameOver', function(){

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

    it('countMap', function(){

        mineSweeper.setMineMap([
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
        ]);
        assert.deepEqual(mineSweeper.getCountMap(), [
            [1, 1, 1, 0],
            [1, 0, 1, 0],
            [1, 1, 1, 0],
        ]);

        mineSweeper.setMineMap([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 1],
        ]);
        assert.deepEqual(mineSweeper.getCountMap(), [
            [1, 2, 1, 0],
            [2, 1, 2, 1],
            [1, 1, 2, 0],
        ]);

        mineSweeper.setMineMap([
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
            [0, 0, 0],
        ]);
        assert.deepEqual(mineSweeper.getCountMap(), [
            [2, 4, 2],
            [4, 8, 4],
            [2, 4, 2],
            [2, 3, 2],
        ]);

    });

    it('openMap', function(){

        let tests = [
            {
                mineMap: [
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                ],
                opens: [{
                    x: 0,
                    y: 0,
                    expect: [
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                    ]
                },{
                    x: 3,
                    y: 3,
                    expect: [
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                    ]
                }],
            },{
                mineMap: [
                    [0, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0],
                ],
                opens: [{
                    x: 2,
                    y: 1,
                    expect: [
                        [0, 0, 0, 0],
                        [0, 0, 1, 0],
                        [0, 0, 0, 0],
                    ]
                },{
                    x: 3,
                    y: 1,
                    expect: [
                        [0, 0, 1, 1],
                        [0, 0, 1, 1],
                        [0, 0, 1, 1],
                    ]
                }],
            },{
                mineMap: [
                    [0, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0],
                ],
                opens: [{
                    x: 1,
                    y: 1,
                    expect: [
                        [0, 0, 0, 0],
                        [0, 1, 0, 0],
                        [0, 0, 0, 0],
                    ]
                }],
            },
        ];

        tests.forEach(function(test){
            test.opens.forEach(function(open){
                mineSweeper.setMineMap(test.mineMap);
                mineSweeper.open(open.x, open.y);
                assert.deepEqual(mineSweeper.getOpenMap(), open.expect);
            });
        });

    });

    it('getMineCount', function(){
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
