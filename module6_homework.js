//Exercise 1
function countingTypes() {
  let strs = 0;
  let nulls = 0;
  let zeros = 0;
  let countables = 0;
  let uncountables = 0;


  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 'coffee', 'tea', 'juice'];
 
 for (i = 0; i < array.length; i++) {
    if (typeof array[i] == 'string') {
      strs++;
    } else if (array[i] == null) {
      nulls++;
    } else if (array[i] == 0) {
      zeros++;
    } else if (array[i] % 2 === 0) {
      countables++;
    } else {
      uncountables++;
    }
  }

  alert(`Строк - ${strs} \n Нуллов - ${nulls} \n Нулей - ${zeros} \n Четных - ${countables} \n Нечетных - ${uncountables}`)
}

countingTypes()

//Exercise 2
function randomNumber(a){
    if(a % 2 !== 0 && a % 3 !== 0 && a < 1001){
        return console.log(a + " - простое число");
    }else if(a >= 1001){
        return console.log(a + " - Данные неверны");
    }else return console.log(a + " - не простое число");
}

//Exercise 3
function firstFunc(a1){
    return function secondFunc(a2){
        return console.log(a1+a2);
    }
}

firstFunc(33)(67);

//Exercise 4
let i = 0;
setInterval(function number(a,b){
    a += i;
    if(a <= b){
        console.log(a);
    }
    i++;
}, 1000, 5, 8);

//Exercise 5
let result = 1;
const number = (x,n) => {
    for (let i = 0; i <= n; i++) {
        if(i == 0){
            result = 1;
        }else if(i == 1){
            result = x;
        }else {
            result *= x;
        }
    }
    console.log(result);
}

number(2,5);