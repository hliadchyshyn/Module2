module.exports = function Circle (r){
    this.radius  = r;

    this.geArea = function (){
        return 2*Math.PI*this.radius
    }
    this.getSquare = function (){
        return Math.PI*this.radius**2
    }
}