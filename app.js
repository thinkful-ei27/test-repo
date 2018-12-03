let myTeam = 'Peter David Jason';
console.log(myTeam);
function createGreeting(name, age) {
    checkIfParameterExists(name, age);
    checkIfParameterIsRightType(name, age);
      const yob = getYearofBirth(age);
      return `my name is ${name} and I am ${age}, I was born in ${yob}`
}

function checkIfParameterExists (name, age) {
  if (!name || !age) {
    throw new Error('Please provide name and age');
  }
}

function checkIfParameterIsRightType(name, age) {
  if (typeof name !== 'string' || typeof age !== 'number') {
    throw new TypeError('name must be a string and age must be a number')
  }
}

 function getYearofBirth(age) {
     if (age < 0 ) {
         throw new Error('Age can not be negative');
     }
    //  try {
    //      createGreeting('bob', -1);
    //  }
    //  catch(e) {
    //      console.error(e.message);
    //  }
    const yearOfBirth = 2018 - age;
    return yearOfBirth;
 }
//  getYearofBirth();
 createGreeting("Peter", 49);
 