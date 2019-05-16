let sayNumber = prompt("De quel nombre veux tu calculer la factorielle ?");

function factorial(sayNumber) {

if (sayNumber == 0  ||  sayNumber == 1) 
	return 1;
else 
	return sayNumber * (factorial( sayNumber - 1));
}

let answer = "Le résultat est" + " " + (factorial(sayNumber))
console.log(answer);