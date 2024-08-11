
var a=10;

function call(){
    a=11;
    var b=12;
    console.log("Hi this is function");
    console.log("Value local "+b);
}

call();
console.log("Value "+a);
//console.log("Value global "+b);

//Passing parameter to function
var b=22;

function multiple(value1){
    return b*2;
}

console.log("Multiple "+ multiple(b));

//passing object to function

const car ={
make:"tata",
model:"indica",
type:"hatchback",
year:"2010"
};

function changeMake(theobj){
theobj.make="tata2";
}

changeMake(car);
console.log("Make of car "+ car.make);


/* function expression  without name*/

const factorial = function (n) {
    return n < 2 ? 1 : n * factorial(n - 1);
  };
  
  console.log(factorial(3));

  /* function expression  withname*/

const factorial2 = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(4));