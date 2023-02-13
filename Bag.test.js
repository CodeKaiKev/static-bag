const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(19)
        expect(bag.weight).toBe(19)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })
    //if bag has no weight, return error
    test('bag more than max weight', () => {
        expect(() => new Bag(24)).toThrowError('Bag needs to be less than 23kg')
    })
})