

function sayHello (name) {
    return console.log('Привет, ' + name + "!");
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
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

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
