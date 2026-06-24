//1)odd or even

const check=num=>{
    if (num%2===0){
        return"even";
}
    else{
        return"odd";

    }
}    

console.log(check(4));
console.log(check(7));
console.log(check(0));

//2)result evaluator
function evaluateResult(marks) {

    if (marks < 0 || marks > 100) {
        console.log("Invalid marks");
        return null;
    }

    if (marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(evaluateResult(75));   
console.log(evaluateResult(40));   
console.log(evaluateResult(120));  

//3) Maximum Finder Largest of Three Numbers

const findMax = (a, b, c) => {

    let max = a;

    if (b > max) {

        max = b;
    }

    if (c > max) {

        max = c;
    }

    return max;
};

console.log(findMax(10, 25, 15)); 
console.log(findMax(5, 3, 8));    
console.log(findMax(9, 9, 2));

//4)Accumulator Sum from 1 to N

function sumToN(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {

        sum = sum + i;
    }

    return sum;
}

console.log(sumToN(5));
console.log(sumToN(10));  

//5)Multiplication Table Generator

function printTable(num) {

    for (let i = 1; i <= 10; i++) {

        console.log(num + " x " + i + " = " + (num * i));
    }

}

printTable(3);
//6)Digit Counter Number Length Finder

function countDigits(num) {

    if (num === 0) {

        return 1;
    }

    let count = 0;

    while (num > 0) {

        num = Math.floor(num / 10);

        count++;
    }

    return count;
}

console.log(countDigits(1234)); 
console.log(countDigits(9)); 
console.log(countDigits(10000)); 

//7)Number Reverser

function reverseNumber(num) {

    let reverse = 0;

    while (num > 0) {

        let digit = num % 10;

        reverse = reverse * 10 + digit;

        num = Math.floor(num / 10);

    }

    return reverse;
}

console.log(reverseNumber(1234)); 
console.log(reverseNumber(500)); 
console.log(reverseNumber(91)); 


//8)Factorial Engine

function factorial(n) {

    let fact = 1;

    for (let i = 1; i <= n; i++) {

        fact = fact * i;

    }

    return fact;
}

console.log(factorial(5)); 
console.log(factorial(3)); 
console.log(factorial(1)); 

//9)Prime Validator

function isPrime(num) {

    if (num < 2) {

        return false;
    }

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {

            return false;
        }

    }

    return true;
}

console.log(isPrime(7)); 
console.log(isPrime(10)); 
console.log(isPrime(2)); 

//10)Pattern Builder  Star Triangle

function printPattern(n) {

    for (let i = 1; i <= n; i++) {

        let stars = "";

        for (let j = 1; j <= i; j++) {

            stars = stars + "*";

        }

        console.log(stars);

    }

}

printPattern(4);


