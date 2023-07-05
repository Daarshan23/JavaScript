// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year)

// var x = 10;
// var y = 2;
// var x = function (x,y){
//     return x * y;
// } 

// const x = (x,y) => x * y;

// console.log(x(10,2));


// const add = (a, b) => a + b;
// console.log(add(10, 20));

// const name = "John";
// const message = `Hello, ${name}!`;
// console.log(message);


// const [a, b] = [1, 2];
// const { firstName, lastName } = { firstName: "John", lastName: "Doe" };
// console.log(`${firstName}, ${lastName}, ${a}, ${b}`);


// const arr = [1, 2, 3];
// const obj = { x: 1, y: 2 };
// const newArr = [...arr, 4, 5];
// const newObj = { ...obj, z: 3 };

// console.log(arr);
// console.log(obj);
// console.log(newArr);

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
  
//     sayHello() {
//       console.log(`Hello, my name is ${this.name}.`);
//     }
//   }
// console.log(Person.name);  


// math.js
// import { add } from "./math.js";
// export function add(a, b) {
//     return a + b;
//   }
//   console.log(add(100,2))


function fetchData() {
    return new Promise((resolve, reject) => {
      // Asynchronous operations
      if (dataIsAvailable) {
        resolve(data);
      } else {
        reject("Data not available.");
      }
    });
  }
console.log(fetchData());  
  