/*primitives vs objects 
numbers, strings and booleans undefined and nulls are primitives and everything 
else are objects 
 primitives actually hold the date inside the variable the value 
in itself
Objects just contain a copy of the value*/

// primitives 

var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);
//this will console log 46 for var a and 23 for var b.



//objects 

var obj1 = {
    name: 'John', 
    age: 23
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//this will log the age of 30 for both of them


//functions

var age = 27; 
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b,) {
    a = 30;
    b.city = 'San Francisco';
    b.name = 'Bacchus'
    

}

change(age, obj);

console.log(age);
console.log(obj.name);
console.log(obj.city);

//this will console log the new City and the new name but will not change the 
//age becasue the age is a primitive and the other info is in an object
