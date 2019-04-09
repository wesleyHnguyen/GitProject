let Temperature = function (c) {
    this.c = c;

}

Temperature.prototype.cToFConverter = function () {

     return ( this.c * 1.8 ) +  32;
};

Temperature.prototype.cToKConverter = function () {

    return this.c  +  273;
};