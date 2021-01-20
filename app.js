

//Массив с данными пользователей
const users = [
  {
    age: 14,
    nameSurname: "Valera Dut",
  },
  {
    age: 17,
    nameSurname: "Dan Sudan",
  },
  {
    age: 22,
    nameSurname: "Will Smith"
  },
]
document.getElementById('student_list').innerHTML 
//Тут я не знаю может нужно вывести длину массива в переменнную и уже с ней производить вычесления.
function averageAge(age){
  let result;
  let length = Array.length(users);
  for( let i = 0; i < length ; i++){
    result += Array[i] / length ;
  }
  console.log(result);
}
document.getElementById('average').innerHTML;


//Функции для калькулятора.
function plus() {
  let num1, num2, result;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 + num2;
  document.getElementById('out').innerHTML = result;
}

function minus() {
  let num1, num2, result;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 - num2;
  document.getElementById('out').innerHTML = result;
}
function multiply() {
  let num1, num2, result;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 * num2;
  document.getElementById('out').innerHTML = result;
}

function divide() {
  let num1, num2, result;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 / num2;
  document.getElementById('out').innerHTML = result;
}