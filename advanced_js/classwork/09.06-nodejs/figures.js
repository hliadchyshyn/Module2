function Circle (r){
    this.radius  = r;

    this.geArea = function (){
        return 2*Math.PI*this.radius
    };
    this.getSquare = function (){
        return Math.PI*this.radius**2
    }
};

function Square (a){
    this.side  = a;
};


Square.prototype.gePerimeter = function (){
    return 4*this.side
};
Square.prototype.getArea = function (){
    return this.side**2
};

module.exports = {Circle,Square};