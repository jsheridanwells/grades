let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let grades = {
	a:0,
	b:0,
	c:0,
	d:0,
	f:0
}

// How many of each grade?
for (let i = 0; i < scores.length; i++) {
	if (scores[i] > 90) {
		grades.a += 1;
	} else if (scores[i] <= 90 && scores[i] > 80) {
		grades.b +=1;
	} else if (scores[i] <= 80 && scores[i] > 70) {
		grades.c +=1;
	} else if (scores[i] <= 70 && scores[i] > 60) {
		grades.d +=1;
	} else {
		grades.f +=1;
	}
}

console.log(grades);

// What is the lowest grade?
let sorted = scores.sort();
console.log('The lowest grade is ' + sorted[0]);

// What is the highest grade?
console.log('The highest grade is ' + sorted[sorted.length - 1]);