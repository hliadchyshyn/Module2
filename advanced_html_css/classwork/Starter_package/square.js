module.exports = function Square (a) {
    this.a = a;
    this.getSquare = function(){
        return this.a*this.a;
    };
    this.getDiag = function() {
        return this.a*(2**0.5);
    }

}