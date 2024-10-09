
// Importera class Car
import { Car, calculateCarPrice, theAge }  from './data/cars.js' // PATH
import * as vehicleCreator from './utils/vehicleCreator.js' // PATH


let cars = vehicleCreator.getCars()


// hgej he   
console.log( calculateCarPrice(cars[0]) ) 


const createCarDivs = function(){
    var c = document.getElementsByClassName('productgallery')[0]
    var x = `<div class="productcard">
    <img src="${cars[0].img}">
    <div class="information">
        <div class="name">${cars[0].name}</div>
        <div class="description">${cars[0].year}</div>
        <a class="ctabutton" href="#">${cars[0].price} kr</a>
    </div>`
    c.innerHTML += x
    var x2 = `<div class="productcard">
    <img src="${cars[1].img}">
    <div class="information">
        <div class="name">${cars[1].name}</div>
        <div class="description">${cars[1].year}</div>
        <a class="ctabutton" href="#">${cars[1].price} kr</a>
    </div>`
    c.innerHTML += x2

    var x3 = `<div class="productcard">
    <img src="${cars[2].img}">
    <div class="information">
        <div class="name">${cars[2].name}</div>
        <div class="description">${cars[2].year}</div>
        <a class="ctabutton" href="#">${cars[2].price} kr</a>
    </div>`
    c.innerHTML += x3

    var x4 = `<div class="productcard">
    <img src="${cars[3].img}">
    <div class="information">
        <div class="name">${cars[3].name}</div>
        <div class="description">${cars[3].year}</div>
        <a class="ctabutton" href="#">${cars[3].price} kr</a>
    </div>`
    c.innerHTML += x4


    var x5 = `<div class="productcard">
    <img src="${cars[4].img}">
    <div class="information">
        <div class="name">${cars[4].name}</div>
        <div class="description">${cars[4].year}</div>
        <a class="ctabutton" href="#">${cars[4].price} kr</a>
    </div>`
    c.innerHTML += x5



    var x6 = `<div class="productcard">
    <img src="${cars[5].img}">
    <div class="information">
        <div class="name">${cars[5].name}</div>
        <div class="description">${cars[5].year}</div>
        <a class="ctabutton" href="#">${cars[5].price} kr</a>
    </div>`
    c.innerHTML += x6

    

    var x7 = `<div class="productcard">
    <img src="${cars[6].img}">
    <div class="information">
        <div class="name">${cars[6].name}</div>
        <div class="description">${cars[6].year}</div>
        <a class="ctabutton" href="#">${cars[6].price} kr</a>
    </div>`
    c.innerHTML += x7




    var x8 = `<div class="productcard">
    <img src="${cars[7].img}">
    <div class="information">
        <div class="name">${cars[7].name}</div>
        <div class="description">${cars[7].year}</div>
        <a class="ctabutton" href="#">${cars[7].price} kr</a>
    </div>`
    c.innerHTML += x8

    var x9 = `<div class="productcard">
    <img src="${cars[8].img}">
    <div class="information">
        <div class="name">${cars[8].name}</div>
        <div class="description">${cars[8].year}</div>
        <a class="ctabutton" href="#">${cars[8].price} kr</a>
    </div>`
    c.innerHTML += x9



    var x10 = `<div class="productcard">
    <img src="${cars[9].img}">
    <div class="information">
        <div class="name">${cars[9].name}</div>
        <div class="description">${cars[9].year}</div>
        <a class="ctabutton" href="#">${cars[9].price} kr</a>
    </div>`
    c.innerHTML += x10


}

console.log(cars)
createCarDivs()





// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//     // Getter
//     get area() {
//       return this.calcArea();
//     }
//     // Method
//     calcArea() {
//       return this.height * this.width;
//     }
//   }
// //Constructor function
// function User(namn) {
//     this.name = namn;
// }

// let user3 = new User('Bob')
// let user2 = new User('John');






// // TYPESCRIPT - Javascript med TYPER
//   const square2 = new Rectangle("aaaa", 12)
  
//   const square = new Rectangle(10, 10);

  



  
//   console.log(square.area); // 100
  


// // var number
// let number = 12
// const age = 52


// // C# lambdas
// // new { a: "Hej", b: "dasdasdas"};
// // anonyma objekt

// let user = {
//     name: "Stefan",
//     age:52
// };

// console.log(user.name);
// user.newAge = 11;

// console.log(user)







// // for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
// //     alert(i);
// //   }
  


// age = 12
// // == värdejämförelse "10" = 10
// // === värde och datatyps-jämförelse "10" != 10
// if( age == 12){

// }
// console.log(number) // undefined
// number = 10

// console.log(number)
// // 10

// //var age = 12



