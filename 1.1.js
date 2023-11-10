// Double the value of each element of array using imperative and declarative

// Imperative Way


const numbers = [1, 2, 3, 4];
const numbersDoubled = [];
for (let i = 0; i < numbers.length; i++) {
    numbersDoubled.push(numbers[i] * 2);
}


// Declarative way

const numbers = [1, 2, 3, 4];
const numbersDoubled = numbers.map((number) => number * 2);

