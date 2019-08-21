/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.Window Binding - if it's not explicit, implicit or new, then the this keyword will default to the window object or be undefined.
 *
 * 2.Explicit Binding - uses call, apply or bind.
 *
 * 3.New Binding - when you have a function invoke when you have the new keyword, the this keyword is bound to the new object being constructed.
 *
 * 4.Implicit Binding - left of the dot when you call it.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

const sayName = function() {
  console.log(this.name);
};

const melissa4 = {
  name: "Melissa"
};

sayName();

// Principle 2

// code example for Implicit Binding

const Human = function(name, lives) {
  return {
    name: name,
    lives: lives,
    HumanName: function() {
      console.log(this.name);
    },
    daughter: {
      name: "Ivy",
      HumanName: function() {
        console.log(this.name);
      }
    }
  };
};

const melissa = Human("Melissa", "Idaho Falls");
melissa.HumanName();
melissa.daughter.HumanName();

// Principle 3

// code example for New Binding

const newHuman = function(name, age, lives) {
  this.name = name;
  this.age = age;
  this.lives = lives;
};

const melissa3 = new newHuman("Melissa", 48, "Idaho Falls");
console.log(melissa3);

// Principle 4

// code example for Explicit Binding

const sayHello = function() {
  console.log(`Hi my name is  ${this.name}`);
};

const melissa1 = {
  name: "Melissa",
  age: 48,
  lives: "Idaho Falls"
};

sayHello.call(melissa1);
