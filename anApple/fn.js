function Apple(){
    this.weight = 10;

    this.getWeight = function () {
      return this.weight;
    };

    this.decrease = function () {
        if (this.weight > 0)
            this.weight--;
    };

     this.isEmpty = function () {
         return this.weight <= 0;
     }
}

function Human() {
    this.setName = function (name) {
        this.name = name;
    };

    this.getName = function () {
        return this.name;
    };

    this.setGender = function(isMale) {
        this.gender = !!isMale;
    };

    this.isMale = function() {
        return this.gender;
    };

    this.setWeight = function(weight) {
        this.weight = weight;
    };

    this.getWeight = function() {
        return this.weight;
    };

    this.eat = function(apple) {
        if (this.checkApple(apple)){
            apple.decrease();
            this.weight++;
        } else
            alert("Sorry!!! The apple is no more");
    };

    this.checkApple = function (apple) {
        if (!apple.isEmpty())
            return true;
        else
            return false;
    };

    this.say = function () {
        alert("Hello!!! My name is " + this.getName());
    }

}
