let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// How many of each grade?
console.log('There are ' + scores.length + ' grades.');

// What is the lowest grade?
let sorted = scores.sort();
console.log('The lowest grade is ' + sorted[0]);

// What is the highest grade?
console.log('The highest grade is ' + sorted[sorted.length - 1]);