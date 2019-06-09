function Burger(meat, sauce) {
    this.lookAtMeat = () => meat;
    this.findSauce = () => sauce;

}

Burger.prototype.basePrice = 10;

Burger.prototype.meatTypes = {
    chicken: 5,
    beef: 8,
    pork: 7,
    fish: 7,
    veggie: 5,
};

Burger.prototype.sauceTypes = {
    bbq: 3,
    curry: 4,
    chile: 3.5,
    mustard: 3,
    mayo: 2,
    cheese: 3,
};

Burger.prototype.price =  function () {
  return this.basePrice+this .meatTypes[this.lookAtMeat()]+this.sauceTypes[this.findSauce()];
};

const burger1 = new Burger('chicken', 'cheese');
const burger2 = new Burger('beef', 'bbq');

console.log(burger1.price());
console.log(burger2.price());