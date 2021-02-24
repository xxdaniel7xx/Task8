
//Task 1
function input_number() {
    let num = prompt("Введите число");
    num *=1;
    alert(typeof(num));
    if (isNaN(num)) {
        alert("Упс, кажется, вы ошиблись");
        input_number()
    }   else{
            let numEven = num%2;
            if (numEven === 0) {
                alert(`${num} - четное число`)
            }   else{
                    alert(`${num} - нечетное число`)
                }
    }
}

// input_number()

//Task 2

function type_of_X() {
    let X = prompt("Введите значение")
    if (isFinite(X)) {
        alert("Х - число")
    }   else if (typeof(X) == typeof ('a')) {
        alert('X - строка')
    }   else if (typeof(X) == typeof(true)) {
        alert('X - логический тип')
    }   else {
        alert('Тип Х не определен')
    }

}

//Task 3

function str_reverse() {
    let textValue = document.getElementById("text_field").value;
    let textResult = document.getElementById("text_result");
    textResult.innerHTML = textValue.split("").reverse().join("");
}

//Task 4

function random_num() {
    let min=0;
    let max=100;
    min = Math.ceil(min);
    max = Math.floor(max);
    let random = Math.floor(Math.random() * (max - min +1)) + min;
    let randomResult = document.getElementById("random_number");
    randomResult.innerHTML = " "+random;
}

//Task 5 and 6 (and 9)

function random_num_array() {
    //Да, я просто скопировал предыдущий код. Это наверняка не правильно. Однако на мой взгляд пара лишних строк кода не такая большая жертва вместо дополнительной функции.

    let min=0;
    let max=100;
    min = Math.ceil(min);
    max = Math.floor(max);
    let random;

    let randomArray = [];
    let arrayLen = document.getElementById("array_len").value;

    for (let i = 0; i < arrayLen; i++) {
        random = Math.floor(Math.random() * (max - min +1)) + min;
        randomArray.push(random);
    }
    let arrayLenRes = document.getElementById("array_len_result");
    arrayLenRes.innerHTML = " " + arrayLen;

    let arrayRes = document.getElementById("array_result");
    arrayRes.innerHTML = " " + randomArray;

    let u = 0;

    let simileRes = document.getElementById("simile_result");

    for ( let k = 0; k < arrayLen; k++) {

        if (randomArray[k] == randomArray[0]) {
            u += 1;
        }
    }

    if (u == arrayLen) {
        simileRes.innerHTML = " ДА";
    } else {
        simileRes.innerHTML = " НЕТ";
    }

    document.getElementById("array_len").value = "";

}

//Task 7

let arrEveOdd = []

function add_element() {
    let arrayInput = document.getElementById("array_input").value;

    // Здесь проводится проверка на ввод числа или текста, функция будет избегать добавления в массив данных типа NaN

    if (isNaN(arrayInput*1) != true ) {
        arrayInput *= 1;
        arrEveOdd.push(arrayInput);
    } else {
        arrEveOdd.push(arrayInput)
    }

    document.getElementById('array_input').value = "";

    return arrEveOdd;
}

function null_element() {
    nullElement= null;
    arrEveOdd.push(nullElement);
    return arrEveOdd;
}

function even_odd_arr() {
   let arrayInputLen = document.getElementById("array_input_len");
   arrayInputLen.innerHTML = " " + arrEveOdd.length;

   let e = 0;
   let o = 0;
   let n = 0;

   let arrayInputResult = document.getElementById("array_input_result");
   arrayInputResult.innerHTML = " " + arrEveOdd;
   arrEveOdd.forEach(function (item, index) {
        if (item == null) {
            n += 1;
       }
        if ((index+1)%2 == 0 ) {
            e += 1;
        }   else {
            o += 1;
        }
        return e, o, n;
   })

   let evenResult = document.getElementById("even_result");
   evenResult.innerHTML = " " + e;

   let oddResult = document.getElementById("odd_result");
   oddResult.innerHTML = " " + o;

   let nullResult = document.getElementById("null_result");
   nullResult.innerHTML = " " + n;

}

function delete_arr(){
    arrEveOdd.length = 0;
    return arrEveOdd;
}

//Task 8

let arrKeyValue = new Map();

function add_pair() {

    let keyInput = document.getElementById("key_input").value;
    let valueInput = document.getElementById("key_input").value;


    if (isNaN(keyInput*1) != true ) {
        keyInput *= 1;
    }

    if (keyInput == "true") {
        keyInput = true;
    }   else if (keyInput == "false") {
        keyInput = false;
    }

    if (isNaN(valueInput*1) != true ) {
        valueInput *= 1;
    }

    if (valueInput == "true") {
        valueInput = true;
    }   else if (valueInput == "false") {
        valueInput = false;
    }

    arrKeyValue.set (keyInput, valueInput);

    document.getElementById('key_input').value = "";
    document.getElementById('value_input').value = "";

    return arrKeyValue;
}


function key_value_arr() {


    let keyValueResult = document.getElementById("key_value_result");

    arrKeyValue.forEach (function(key,value){

        keyValueResult.innerHTML += `Ключ - ${key}, значение - ${value} <br>`;
    })

}

function delete_key_value() {
    arrKeyValue.clear()
    return arrKeyValue;
}

//Task 10

let numInput

function simple_num_input() {

    numInput = document.getElementById("num_input").value;
    document.getElementById("num_input").value = "";
    return numInput
}


function simple_num(numInput) {
    let numResult = document.getElementById("num_result");
    let numSimpleResult = document.getElementById("num_simple_result");

    if (numInput > 1000 || numInput < 0) {
        numResult.innerHTML = "Данные неверны, повторите ввод "
        return
    } else {
        numResult.innerHTML = " " + numInput;
    }


    if (numInput == 0 || numInput == 1) {
        numSimpleResult.innerHTML = "НЕТ"
    }
    let k;
    let arr_k=[]
    for (let i = 1; i <= numInput; i++ ) {
        k = numInput % i;
        if (k == 0) {
            arr_k.push(k);
        }
    }

    if (arr_k.length == 2) {
        numSimpleResult.innerHTML = "ДА";
    } else {
        numSimpleResult.innerHTML = "НЕТ";
    }

}
