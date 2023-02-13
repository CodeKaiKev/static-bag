class Bag {
    #maxWeight = 23;
    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        } 
        if(weight > this.#maxWeight) {
            throw new Error('Bag needs to be less than 23kg');
        }
        this.weight = weight
    }
}

module.exports = Bag