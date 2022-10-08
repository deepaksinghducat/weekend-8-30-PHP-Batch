// class Car {
//     brand = "Maruti"
//     model = 2022
//     name = "alto"

//     details () {
//         return this.brand + " " + this.model + " " + this.name;
//     }
// }

// const alto = new Car();
// console.log(alto.details());


// constructor
// class Car {
//     constructor(brand,model,name) {
//         this.brand = brand;
//         this.model = model;
//         this.name = name;
//     }

//     details () {
//         return this.brand + " " + this.model + " " + this.name;
//     }
// }

// const alto = new Car("maruti",2022,'alto');
// console.log(alto.details());

// inheritance
// class Car {
//     brand = "Maruti"
//     model = 2022

//     details() {
//         return this.brand + " " + this.model ;
//     }
// }

// class Alto extends Car {

    
//     // details() {
//     //     return this.brand + " " + this.model + "fadsdfasf" ;
//     // }
// }

// const alto = new Alto();

// console.log(alto.details());


// private 
// class Car {
//     #brand = "Maruti"
//     model = 2022

//     details() {
//         return this.#brand + " " + this.model ;
//     }
// }

// class Alto extends Car {
//     details() {
//         return this.#brand + " " + this.model + "fadsdfasf" ;
//     }
// }

// const alto = new Alto();

// console.log(alto.details());
