
// 1- FUNCTION DEFINITION
// function sum(a, b) {
//     return a + b;
// }

// function product(a, b) {
//     return a * b;
// }

// console.log(sum(13, 45));

// const summation = sum(18, 9);
// const production = product(12, 4);
// console.log(summation, production);


// 2- ANONYMOUS FUNCTION DEFINITION
// setTimeout(function() {
//     console.log("You rock really like the Rock");
// }, 3000)




// 3- ARROW FUNCTION DEFINITION
// setTimeout(() => console.log("You rock bro"), 3000);




// 4- OBJECT DEFINITION
// const bereaCollege = {
//     student: "Stevenson Michel",
//     staff: "Brian Ramsey",
//     "^-jumpman": "Drake & Future"
// }

// console.log(bereaCollege);

// console.log(bereaCollege.staff);




// 5- CLASS DEFINITION
// class BereaCollege {
//     constructor(student, staff, isActive) {
//         this.student = student;
//         this.staff = staff;
//         this.isActive = isActive;
//     }

//     goesToSchool() {
//         console.log("My name is " + this.student + " and I am an active student " + this.isActive)
//     }
// }

// const mySituation = new BereaCollege("Stevenson Michel", "Nope", true);

// mySituation.goesToSchool();




// 6- CONDITIONAL STATEMENTS
// let numOfPlayers = 34;

// if (numOfPlayers < 23) {
//     console.log("More players are needed for the team")
// }
// else if (numOfPlayers > 23) {
//     console.log("There are too many players in the team")
// }
// else {
//     console.log("We have our team")
// }








// 7- AND and OR STATEMENTS
// const school = {
//     name: "College Savio",
//     isCatholic: true,
//     numOfStudents: 1500,
//     hasAlumniNetwork: false,
//     bestAlumni: "Stevenson Michel"
// }


// if (school.name != "College Dominique Savio" && school.isCatholic) {
//     console.log("That is the right school")
// }
// else {
//     console.log("Do they have alumni network " + school.hasAlumniNetwork + " but the best alumni is " + school.bestAlumni)
// }




// 8- FOR LOOPS
// const names = ["JemJem", "KTran", "Hossein", "Ayoubi"]

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// for (let j = 0; j < names.length; j++) {
//     console.log([j, names[j]])
// }




// 9- WHILE LOOPS
// let password = "abcdefg"
// let guess = ""

// while (guess != password) {
//     guess = prompt("Enter your password again")
// }

// alert("Login Successful")


let number = 4;
let factorial = 1;
let originalNum = number;

do {
    factorial = factorial * number;
    number = number - 1;
} while (number > 0);

console.log("The " + originalNum + "'s factorial is " + factorial);