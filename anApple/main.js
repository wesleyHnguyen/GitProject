let adam = new Human();
adam.setName("Adam");

let eva = new Human();
eva.setName("Eva");

alert("Adam says hello to Eva");
adam.say();

alert("Eva says hello to Adam");
eva.say();


let apple = new Apple();
alert("The apple have weight of " + apple.getWeight() + " at the beginning");

alert("Adam bits once");
adam.eat(apple);
alert("The weight of apple after being eaten by Adam : " + apple.getWeight());

alert("Eva bites the apple 9 times");
for(let i = 1; i <= 9; i++)
{
    eva.eat(apple);
}

alert("The weight of apple after being eaten by Eva : " + apple.getWeight());

alert("Can we eat more?");
adam.eat(apple);

