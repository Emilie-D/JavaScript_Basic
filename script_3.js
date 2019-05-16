let numberPyr = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

function pyramide(numberPyr) {

  for (var i = 1; i <= numberPyr; i++) {
    var answer = '';
    
    for (var j = 1; j <= (numberPyr - i); j++) {
      answer += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      answer += '*';
    }
    
    console.log(answer);
  }
}

pyramide(numberPyr);