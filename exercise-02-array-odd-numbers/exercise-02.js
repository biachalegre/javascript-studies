var numbers = [1, 2, 3, 4, 5, 6];

//Printing the first, third and sixth array elements
console.log("First number: " + numbers[0] + ", third number: " + numbers[2] + ", sixth number: " + numbers[5])

//Substitue odd numbers for they respective double
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        numbers[i] = 2 * numbers[i]
    }
}

console.log(numbers)

