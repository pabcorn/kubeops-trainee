var fizzBuzz = 45;
var answer = "";

/* switch (input) {
    case input % 3:
        console.log(fizz);
        break;
    case input % 5:
        console.log(buzz);
        break;

    default:
        console.log(input);
        break;
} */
answer = fizzBuzz % 3 === 0 & fizzBuzz % 5 === 0 ? console.log("FizzBuzz") : fizzBuzz % 3 === 0 ? console.log("Fizz") : fizzBuzz % 5 === 0 ? console.log("Buzz") : fizzBuzz;
console.log(">> Fizzbuzz (" + fizzBuzz +")\n" + answer);