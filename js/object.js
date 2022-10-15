// let array = [10,20,30];

// let obj = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// console.log(obj.fullName());

// let array = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         fullName: function () {
//             return this.firstName + ' ' + this.lastName;
//         }
//     }, {
//         firstName: 'John1',
//         lastName: 'Doe1',
//         fullName: function () {
//             return this.firstName + ' ' + this.lastName;
//         }
//     },  {
//         firstName: 'John2',
//         lastName: 'Doe2',
//         fullName: function () {
//             return this.firstName + ' ' + this.lastName;
//         }
//     }, {
//         firstName: 'John3',
//         lastName: 'Doe3',
//         fullName: function () {
//             return this.firstName + ' ' + this.lastName;
//         }
//     },  {
//         firstName: 'John4',
//         lastName: 'Doe4',
//         fullName: function () {
//             return this.firstName + ' ' + this.lastName;
//         }
//     }
// ]

// for (const obj of array) {
//     console.log(obj.fullName());
// }

// let obj = {
//     firstName: 'John'
// }

// let obj2 = {
//     fullName: function (lastName) {
//         return this.firstName+ ' '+ lastName;
//     }
// }

// let obj3 = Object.assign(obj);

// console.log(obj3);

// Call
// console.log(obj2.fullName.call(obj, "Doe"));

// Apply
// console.log(obj2.fullName.apply(obj,['doe']));
