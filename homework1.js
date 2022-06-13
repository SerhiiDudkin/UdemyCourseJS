// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for(let i = 5; i < 11; i++) {
        console.log(i);
    }
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i > 9; i--) {
        if (i === 13) {
            break;
          }
        console.log(i);
    }

}
// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i < 11; i++){
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let num = 2;
    while ( num <= 16) {
       // if (num % 2 === 0 ) continue;
        console.log(num);
        num+=2;
        }
    }
// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    // Не трогаем
    return arrayOfNumbers;
}
// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for ( let i = 0; i < arr.length; i ++) {
        result[i] = arr[i];
    }

    // Пишем решение вот тут


    // Не трогаем
    return result;
}
// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i ++) {
        if ( typeof data[i] === "string") {
            data[i] = data[i] + ' - done';
        } else {
            data[i] *= 2;
        }
    }

    // Не трогаем
    return console.log(data);
}
// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for ( let i = 1; i <= data.length ; i ++) {
        result[i - 1] = data[data.length - i];
    }

    // Не трогаем
    return console.log(result);
}

// Проверяется именно переменная result, формируйте строку в ней
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

