//Calculate dog years:

// this is my age
const myAge = 21;

// this is base year of a dogs life that count as 10.5 y for human
let earlyYears = 2;

earlyYears *= 10.5;

// we already calculated the early age so we remove it from my age
let laterYears = myAge - 2;

// calculate dog years to human in later years
laterYears *= 4;

// add together the first and later years of dog years
myAgeInDogYears = earlyYears + laterYears;

//Write name in lowercase
const myName = 'Johanna'.toLowerCase();

// write out name, age and dog year
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
