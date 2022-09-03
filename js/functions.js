// function add(a,b) {
//   return a+b;
// }

// console.log(add);

// function add(a,b);

// function add(a,b) {
//   return a+b;
// }

// function sum(...args){

//     let total = 0;

//     for(let i = 0; i < args.length; i++){

//         console.log(total, args[i]);
//         total = total + args[i];
//     }

//     return total;
// }

// console.log(sum(10,20,30,30,30));


// rest operator

// function sum(...args){
//     console.log(args);
//     // return a+b+c+d+e;
// }

// sum(10,20,30,30,30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30);


// check palindrome number 

// 12345654321 


function checkPalindromeNumber(number) {
    let reverse = 0;
    let temp = number;

    while (temp != 0) {
        let rem = temp % 10;
        reverse = reverse * 10 + rem;
        temp = parseInt(temp / 10);
    }

    if (number === reverse)
        console.log("Number is palindrome");
    else
        console.log("Number is not palindrome");
}

checkPalindromeNumber(1234321);




