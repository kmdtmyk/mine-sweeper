import Array2D from "../src/Array2D";


describe('array2d', () => {

    let array2d;

    beforeEach(() => {
        array2d = new Array2D(2, 3, 0);
    });

    it('toArray', () => {
        var expect = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        assert.deepEqual(expect, array2d.toArray());

    });

    it('set', () => {
        var expect = [
            [0, 2, 0],
            [0, 0, 3],
        ];
        array2d.set(0, 1, 2);
        array2d.set(1, 2, 3);
        assert.deepEqual(expect, array2d.toArray());

    });


});
