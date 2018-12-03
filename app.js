let myTeam = "Peter David Jason";
console.log(myTeam);
function createGreeting(name, age) {
    const yob = getYearofBirth(age);
    return `my name is ${name} and I am ${age}, I was born in ${yob}`
}
 function getYearofBirth(age) {
    const yearOfBirth = 2018 - age;
    return yearOfBirth;
 }