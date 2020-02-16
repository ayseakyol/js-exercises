var numberOfStudents = 15;
var numberOfMentors = 8;
var total = (numberOfMentors + numberOfStudents) / 2;

var percantageOfMentors = (numberOfMentors / total) * 100;
var percantageOfStudents = (numberOfStudents / total) * 100;
var preciseOfStudents = Math.round(percantageOfStudents);
var preciseOfMentors = Math.round(percantageOfMentors);
console.log(preciseOfMentors);
console.log(preciseOfStudents);
