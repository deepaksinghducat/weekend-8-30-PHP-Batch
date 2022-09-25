// id

// const ptag = document.getElementById('ptag');

// ptag.innerHTML = "fdsafasdasfdasfd";
// ptag.style.color = "red"
// ptag.className = "fdsafsaadsf"

// class 

// const ptag = document.getElementsByClassName('ptag');

// for( let p of ptag) {
//     p.innerHTML = "dsfasfasf"
//     p.style.color = "green"
// }


// tag

// const ptag = document.getElementsByTagName('p');
// console.log(ptag);

// for( let p of ptag) {
//     p.innerHTML = "dsfasfasf"
//     p.style.color = "green"
// }

// query selector

// const ptag = document.querySelector('p')

// console.log(ptag);

// querySelectorAll

// const ptag = document.querySelectorAll('#ptag')
// console.log(ptag);

// traversing of node

// const ul = document.querySelector('ul')
// console.log(ul);

// create a element

const p = document.createElement('p')
p.id = "Fsadfasfasdf"
p.className= "Fasdfasf"
p.innerHTML = "fdsafasffasd"
console.log(p);

const body = window.document.querySelector('body');

console.log(body);
body.appendChild(p)

