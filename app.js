var sub1 = Number(prompt("Enter marks for subject 1:"));
var sub2 = Number(prompt("Enter marks for subject 2:"));
var sub3 = Number(prompt("Enter marks for subject 3:"));
var sub4 = Number(prompt("Enter marks for subject 4:"));
var sub5 = Number(prompt("Enter marks for subject 5:"));

var obtained_marks = sub1 + sub2 + sub3 + sub4 + sub5;

var total_marks = 500;

var percentage = (obtained_marks / total_marks ) * 100;

var output = `
${obtained_marks} out of ${total_marks}
Percentage: ${percentage}%`;

alert(output);

