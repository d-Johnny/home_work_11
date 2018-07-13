function answer() {
  var ar = [
    "Совершенно точно",
    "Определенно",
    "Несомненно",
    "Да",
    "Можно на это смело рассчитывать",
    "Как мне кажется, да",
    "Скорее всего",
    "Прогноз положительный",
    "По всем признакам - да",
    "Ответ как-то мутно выглядит, попробуй еще",
    "Попробуй позже",
    "Тебе сейчас лучше об этом не знать",
    "Невозможно сейчас сказать что-то определенное",
    "Сосредоточься и спроси меня опять",
    "Я бы не стала на это рассчитывать",
    "Мой ответ - нет",
    "Мои источники все отрицают",
    "Прогноз выглядит неутешительно",
    "Сомнительно",
    "Не мучай меня своими скучными вопросами, пожалуйста"
  ];
  var ar_length = ar.length;
  // console.log (ar_length);
  var number = Math.random();
  // console.log (number);
  var sum = ar_length * number;
  // console.log (666, sum);
  var myInt = Math.floor(sum);
  // console.log (myInt + ' целое число');
  var myAnswer = ar[myInt];
  // console.log(myAnswer);
  return myAnswer;
}

//  answer();

function myConsol() {
  var yourText = document.getElementById("myText").value;
  var myObj = document.getElementById("myDiv");
  myObj.innerHTML = yourText + " - " + answer();
}

// for (var i = 0; i < ar_length; i++) {
//   console.log(i, ar[i]);
// }

// var rand_number = Math.random();
// console.log("rand_number", rand_number);

// var round = Math.round(3.2);
// console.log("round", round);

function doReMi (nota) {
  console.log(nota);
  if (nota === "do"){
    document.getElementById('bodyId').className = 'color1'
  } else if (nota === "re") {
    document.getElementById('bodyId').className = 'color2'
  } else if (nota === "mi") {
    document.getElementById('bodyId').className = 'color3'
  }
  // document.getElementById('bodyId').className = 'color1'

}

function words() {
  var drm = document.getElementById('clickMy').value;
  console.log (drm);
  if (drm === 'д') {
    doReMi('do');
  } else if (drm === 'р') {
    doReMi('re');
  } else if (drm === 'м') {
    doReMi('mi');
  }
  

}

