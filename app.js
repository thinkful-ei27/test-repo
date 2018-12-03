let myTeam = "Peter David Jason";
console.log(myTeam);
function createGreeting(name, age) {
    const yob = getYearofBirth(age);
    return `my name is ${name} and I am ${age}, I was born in ${yob}`
}
 function getYearofBirth(age) {
     if (age < 0 ) {
         throw new Error("Age can not be negative");
     }
     try {
         createGreeting('bob', -1);
     }
     catch(e) {
         console.error(e.message);
     }
    const yearOfBirth = 2018 - age;
    return yearOfBirth;
 }
 getYearofBirth();
 