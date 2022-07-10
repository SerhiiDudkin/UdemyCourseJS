function sayHello(name) {
  return console.log("Привет, " + name + "!");
}

function returnNeighboringNumbers(num) {
  return console.log([num - 1, num, num + 1]);
}

//function getMathResult(amount, count) {
//  if (typeof amount !== "number" || count <= 0) {
//      return console.log(amount);
//}
//let str = '';
//  for (let i = 1; i <= count; i ++) {
//    if (i === count) {
//     str += `${amount * i}`;
// } else
// }
//}
function getMathResult(num, times) {
  if (typeof times !== "number" || times <= 0) {
    return num;
  }

  let str = "";

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`;
      // Тут без черточек в конце
    } else {
      str += `${num * i}---`;
      // Это тоже самое, что и
      // str = str + num * i + "---"
    }
  }

  return str;
}

//getMathResult(5, 6);
function calculateVolumeAndArea(side) {
  if (typeof side === "number" && side > 0 && Number.isInteger(side)) {
    const volume = side * side * side;
    const area = side * side * 6;
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
  } else {
    return `При вычислении произошла ошибка`;
  }
}

//console.log(calculateVolumeAndArea());

function getCoupeNumber(numberPlace) {
  if (
    typeof numberPlace !== "number" ||
    !Number.isInteger(numberPlace) ||
    numberPlace < 0
  ) {
    return console.log(
      "Ошибка. Проверьте правильность введенного номера места"
    );
  } else if (numberPlace === 0 || numberPlace > 36) {
    return console.log("Таких мест в вагоне не существует");
  } else if (numberPlace >= 1 && numberPlace <= 4) {
    return console.log(1);
  } else if (numberPlace >= 5 && numberPlace <= 8) {
    return console.log(2);
  } else if (numberPlace >= 9 && numberPlace <= 12) {
    return console.log(3);
  } else if (numberPlace >= 13 && numberPlace <= 16) {
    return console.log(4);
  } else if (numberPlace >= 17 && numberPlace <= 20) {
    return console.log(5);
  } else if (numberPlace >= 21 && numberPlace <= 24) {
    return console.log(6);
  } else if (numberPlace >= 25 && numberPlace <= 28) {
    return console.log(7);
  } else if (numberPlace >= 29 && numberPlace <= 32) {
    return console.log(8);
  } else if (numberPlace >= 33 && numberPlace <= 36) {
    return console.log(9);
  }
}

//getCoupeNumber();
function getTimeFromMinutes(getMinute) {
  if (
    typeof getMinute !== "number" ||
    getMinute < 0 ||
    !Number.isInteger(getMinute) ||
    getMinute > 600
  ) {
    return "Ошибка, проверьте данные";
  } else {
    const hours = Math.floor(getMinute / 60),
      minute = getMinute % 60;
    if (hours === 0 || hours > 4) {
      return `Это ${hours} часов и ${minute} минут`;
    } else if (hours === 1) {
      return `Это ${hours} час и ${minute} минут`;
    } else if (hours > 1 && hours < 5) {
      return `Это ${hours} часа и ${minute} минут`;
    }
  }
}

getTimeFromMinutes(678);

function findMaxNumber(a, b, c, d) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  ) {
    return 0;
  } else {
    return Math.max(a, b, c, d);
  }
}

function fib(n) {
  if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
    return "";
  }
  let result = ``;
  let first = 0;
  let second = 1;
  for (let i = 0; i < n; i++) {
    if (i + 1 === n) {
      result += `${first}`;
    } else {
      result += `${first} `;
    }
    let third = first + second;
    first = second;
    second = third;
  }
  return result;
}

console.log(fib(9));
