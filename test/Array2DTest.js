import Array2D from "../src/Array2D";


describe('array2d', function(){

    let array2d;

    beforeEach(function(){
        array2d = new Array2D(2, 3, 0);
    });

    it('constructor', () => {
        var expect = [
            [1, 2, 3],
            [4, 5, 6],
        ];
        array2d = new Array2D(expect);
        assert.deepEqual(expect, array2d.toArray());
    });

    it('toArray', function(){
        var expect = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        assert.deepEqual(expect, array2d.toArray());
    });


    it('set', function(){
        var expect = [
            [0, 2, 0],
            [0, 0, 3],
        ];
        array2d.set(0, 1, 2);
        array2d.set(1, 2, 3);
        assert.deepEqual(expect, array2d.toArray());
    });

    it('forEach', function(){
        array2d = new Array2D([
            [1, 2],
            [3, 4],
        ]);
        let sum = 0;
        array2d.forEach(function(value){
            sum += value;
        })
        assert(sum === 10);

        array2d = new Array2D([
            ["a", "b"],
            ["c", "d"],
        ]);
        let contcat = "";
        array2d.forEach(function(value){
            contcat += value;
        })
        assert(contcat === "abcd");
    });

});
