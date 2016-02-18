import Util from '../src/Util';


describe('Util test', () => {

    describe('isArray', () => {

        it('array', () => {
            assert(Util.isArray([]) === true);
            assert(Util.isArray([1, 2, 3]) === true);
            assert(Util.isArray([[1, 2], [3, 4]]) === true);
        });

        it('not array', () => {
            assert(Util.isArray(1) === false);
            assert(Util.isArray({}) === false);
            assert(Util.isArray('text') === false);
            assert(Util.isArray(function(){}) === false);
        });

    });

    describe('clone', () => {

        it('array', () => {
            let array1 = [1, 2, 3];
            let array2 = Util.clone(array1);
            assert.deepEqual(array1, array2);
            assert(array1 !== array2);
            array2[0] += 1;
            assert.notDeepEqual(array1, array2);
        });

        it('object', () => {
            let object1 = {
                id: 1,
                name: 'foo'
            };
            let object2 = Util.clone(object1);
            assert.deepEqual(object1, object2);
            assert(object1 !== object2);
            object2.name += 'bar';
            assert.notDeepEqual(object1, object2);
        });

        it('object array', () => {
            let objects1 = [{
                id: 1,
                name: 'foo'
            },{
                id: 2,
                name: 'bar'
            },{
                id: 3,
                name: 'baz'
            }];
            let objects2 = Util.clone(objects1);
            assert.deepEqual(objects1, objects2);
            assert(objects1 !== objects2);
            objects2.push({id: 4, name: 'hoge'});
            assert(objects1.length === 3);
            assert(objects2.length === 4);
            assert.notDeepEqual(objects1, objects2);
        });

    });

});
