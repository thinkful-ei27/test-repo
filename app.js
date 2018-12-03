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
 
//  starting drills #2

function jediName(firstName, lastName){
  return `${lastName.slice(0,3)}${firstName.slice(0,2)}`
};

// drills #3 

function beyond(num){
  if (typeof num != 'number'){
    console.log('must be number');
  }
  else if (num === Infinity || num === -Infinity){
    console.log('And Beyond');
  }
  else if (num > 0){
    console.log('To Infinity');
  }
  else if (num < 0){
    console.log('To Negative Infinity');
  }
  else if (num === 0){
    console.log('Staying home');
  }
}


function decode(sentence) {
  let arrayOfWords = sentence.split(' ');
  let theMessage = '';
  for (let i = 0; i < arrayOfWords.length; i++) {
    let theWord = arrayOfWords[i];
    if (theWord[0] == 'a') {
      theMessage += (theWord[1]);
    }
    else if (theWord[0] == 'b') {
      theMessage += (theWord[2]);
    }
    else if (theWord[0] == 'c') {
      theMessage += (theWord[3]);
    }
    else if (theWord[0] == 'd') {
      theMessage += (theWord[4]);
    }
    else {
      theMessage += (' ');
    }
  }
  return theMessage;
}

console.log(decode('craft block argon meter bells brown croon droop'));

function howManyDaysInAMonth(month, leapyear) {
  // wanted to figure out how to deal with lowercase months
  // but ran out of time
  
  switch(month) {
    case 'January': 
    case 'March' :
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December': {
      return `${month} has 31 days`;
    }

    case 'April':
    case 'June': 
    case 'September': 
    case 'November': {
      return `${month} has 30 days`;
    }

    case 'February': {
      return leapyear ? `${month} has 29 days` : `${month} has 28 days`;
    }

    default: 
     throw new Error('Please enter a valid month') 
  } 


}

console.log(howManyDaysInAMonth('February'));