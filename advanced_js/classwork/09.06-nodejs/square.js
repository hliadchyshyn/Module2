function Square (a){
    this.side  = a;
};


Square.prototype.gePerimeter = function (){
    return 4*this.side
};
Square.prototype.getArea = function (){
    return this.side**2
};

module.exports = Square;