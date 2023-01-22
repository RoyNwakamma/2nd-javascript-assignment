function lifeInWeeks(age){
    let yearsLeft = 90 - age;
    let month = yearsLeft * 12;
    let weeks = yearsLeft * 48;
    let days = yearsLeft * 365;

    console.log(`You have ${days} days, ${weeks} weeks, and ${month} 
    months left`);
}

lifeInWeeks(parseInt(prompt("Enter your age: ")))

function loveCalculator(firstInput, secondInput) {
    let percentage = Math.floor(Math.random()*101);

    console.log(`${firstInput} and ${secondInput} are ${percentage}% match!!`);
}

loveCalculator(prompt("Enter the first name: "), prompt("Enter the second name: "))