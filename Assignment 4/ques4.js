//Write a JavaScript program to get the difference between a given number
//and 13, if the number is greater than 13 return double the absolute
//difference
function differenceFrom13(number) {
    const diff = Math.abs(number - 13);
    return number > 13 ? diff * 2 : diff;
}

// Test cases
console.log(differenceFrom13(20)); // 20 > 13, so double the difference
console.log(differenceFrom13(10)); // 10 < 13, so return the difference
