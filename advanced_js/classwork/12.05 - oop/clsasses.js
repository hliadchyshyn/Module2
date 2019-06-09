class Burger {
    constructor(meat, sauce) {
        try{
            if (!this.meatTypes[meat]){
                const e = new Error('No such meat');
                e.name = 'MeatError';
                throw(e)
            }
            if (!this.sauceTypes[sauce]){
                const e = new Error('No such sauce');
                e.name = 'SauceError';
                throw(e);
            }
            this.meat = meat;
            this.sauce = sauce;
        } catch (err) {
            console.log(err);
        }

    };
    basePrice = 10;
    meatTypes = {
        chicken: 5,
        beef: 8,
        pork: 7,
        fish: 7,
        veggie: 5,
    };

    sauceTypes = {
        bbq: 3,
        curry: 4,
        chile: 3.5,
        mustard: 3,
        mayo: 2,
        cheese: 3,
    };
    lookAtMeat() {
        return this.meat
    };

    findSauce() {
        return this.sauce
    };
    static staticPrice (burger) {
        return burger.basePrice+burger.meatTypes[burger.lookAtMeat()]+burger.sauceTypes[burger.findSauce()];

    };
    get price () {
        return this.basePrice+this.meatTypes[this.lookAtMeat()]+this.sauceTypes[this.findSauce()];

    };
}

class Cheeseburger extends Burger {
    constructor (meat, sauce, cheese){
        super(meat, sauce);
        this.cheese = cheese;
    }
    basePrice = 12;
    cheeseTypes = {
        'cheddar': 7,
        'parmejano': 10,
        'gouda': 8,
        'feat':7,
    };
    findCheese() {
      return this.cheese;
    }

    get price() {
        return super.price + this.cheeseTypes[this.cheese];
    }
}


// const burger1 = new Burger('chicken', 'cheese');
// const burger2 = new Burger('beef', 'bbq');

// console.log(burger1.price);
// console.log(Burger.staticPrice(burger2));


const cheeseburger1 = new Cheeseburger('1', 'bbq', 'cheddar');

console.log(cheeseburger1.price);