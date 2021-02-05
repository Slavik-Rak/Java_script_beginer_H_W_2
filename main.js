// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

/* let array = [1, 2, 3, 4, 5, 'str1', 'str2', 'str3', 'str4', 'str5', true, false];
for(let elem of array)
console.log(elem); */

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
/*
let array = [];
array[0] = 2;
array[1] = 'str';
array[2] = 'str2';
array[3] = 65;

for (let elem of array)
    console.log(elem);
 */
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

/*
for (let i = 0; i < 10; i++) {
document.write(`<div>lorem+${i}</div>`);
}
 */

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

/*
let rand;

for (let i = 1; i <= 10; i++) {
    rand = parseInt(Math.random() * 99 + 1);
    document.write(`<div> some text id: ${rand} </div>`);
}
 */

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

/*
let i = 0;
while (i < 20) {
    document.write(`<h1>some text ${i}</h1>`);
    i++;
}
 */

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

/*
let i = 0;
while (i < 20) {
   document.write(`<h1>some text${i}</h1>`);
   i++;
}
*/

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*
let rand;
//creat arrey
let array = [];
for (let i = 0; i < 10; i++) {
    array[i] = parseInt(Math.random() * 99 + 1);
}
//-----------------------------

for (const elem of array) {
    console.log(elem);
}

 */
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/*
let alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 'ѐ', 'ё', 'і', 'ї'];

let rand;// кількість букв в слові

let array = [];
// створюєм масив
for (let i = 0; i < 10; i++) {
    rand = parseInt(Math.random() * 17 + 3);//визначаэмо кількість букв в слові
    //????????????????????????????????
    array[i] = '';
    // ????????????????????????????????
    for (let j = 0; j < rand; j++) {
        let sumLetter = parseInt(Math.random() * (alphabet.length - 1));//витягуєм з масиву (alphabet) випадкові букви
        array[i] += alphabet[sumLetter];
    }
}
//
for (const elem of array) {
    console.log(elem);
}
 */
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

/*
let array = ['asdasd', 4, 'ttttt', 2.3, 'dsd', 'ffff', false, 567, 'vvvvv', true];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
 */

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/*
let array = ['asdasd', 4, 'ttttt', 2.3, 'dsd', 'ffff', false, 567, 'vvvvv', true];

for (const elem of array) {
    if(typeof elem =="boolean")
    console.log(elem);
}
 */

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/*
let array = ['asdasd', 4, 'ttttt', 2.3, 'dsd', 'ffff', false, 567, 'vvvvv', true];
for(let elem of array){
    if(typeof elem === "number"){
        console.log(elem);
    }
}
 */

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

/*
let array = ['asdasd', 4, 'ttttt', 2.3, 'dsd', 'ffff', false, 567, 'vvvvv', true];
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string")
        console.log(array[i]);
}
 */

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

/*
let array = [];

array[0] = 'hello';
array[1] = 12;
array[2] = true;
array[3] = 43.43;
array[4] = 'world';
array[5] = 4;
array[6] = 3;
array[7] = false;
array[8] = 'dddd';
array[9] = 'letter';
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}
 */

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/*
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i + ' - iter <br><hr>')
}
 */

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/*
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i}<hr>`);
}
 */

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
/*
for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(`${i}<hr>`);
}
 */

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/*
for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
        console.log(i);
        document.write(`${i}<hr>`);
    }
}
 */

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

/*
for (let i = 0; i < 100; i++) {
    if (i % 2) {
        console.log(i);
        document.write(`${i}<hr>`);
    }
}
 */

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)


/*
for (let hour = 1; hour <= 24; hour++) {
    for (let min = 1; min <= 60; min++)
        for (let sec = 1; sec <= 60; sec++) {
            console.log(`${hour} година ${min} хвилин ${sec} секунд`);
        }
}
 */

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
/*
for (let hour = 1; hour <= 2; hour++) {
    for (let min = 1; min <= 20; min++) {
        for (let sec = 1; sec <= 60; sec++) {
            console.log(`${hour} година ${min} хвилин ${sec} секунд`);

            document.write(`${hour} година ${min} хвилин ${sec} секунд <hr>`);
        }
    }
}
 */

// ____________________________________
// РОБОТА В АУДИТОРІЇ
// ____________________________________


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

/* 
let arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log(arr);

 */
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
/* 
let array = [1, 2, 3];
array.reverse();
console.log(array);
 */

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

/* let array = [1, 2, 3];
array.push(4, 5, 6);
console.log(array); */

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

/* 
let array = [1, 2, 3];
array.unshift(4, 5, 6);
console.log(array);
 */

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
/* 
let array = ['js', 'css', 'jq'];
let firstIndex = array.shift();
console.log(firstIndex);
 */
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
/* 
let array = ['js', 'css', 'jq'];
let endIndex = array.pop();
console.log(endIndex);
 */
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
/* 
let array = [1, 2, 3, 4, 5];
let elarr = array.slice(-2);
console.log(elarr);
 */
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
/* 
let array = [1, 2, 3, 4, 5];
let elarr = array.slice(0, 2);
console.log(elarr);
 */
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
/* 
let array = [1, 2, 3, 4, 5];
array.splice(1,2);
console.log(array);
 */
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
/* 
let array = [1, 2, 3, 4, 5];
array.splice(2,0, 'a', 'b', 'c');
console.log(array);
 */
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
/* 
let array = [1, 2, 3, 4, 5];
array.splice(1, 0, 'a', 'b');
array.splice(5, 0, 'c');
array.splice(7, 0, 'e');
console.log(array);
 */
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.


/* let array = [];

for (let i = 1; i <= 10; i++) {
    let rand = parseInt(Math.random() * 99 + 1);
    array[i] = rand;
}

for (let elem of array) {
    if (elem % 2 == 0) {
        console.log(elem);
    }
}
console.log(array);
 */
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
/* 
let array = [];
let copArrey = [];

for (let i = 1; i <= 10; i++) {
    let rand = parseInt(Math.random() * 99 + 1);
    array[i] = rand;
}
console.log(array);
for (let i = 0; i < array.length; i++) {
    copArrey.push(array[i]);
}
console.log(copArrey);
 */
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
/* 
let array = [];
let copArrey = [];

for (let i = 0; i < 10; i++) {
    let rand = parseInt(Math.random() * 99 + 1);
    array[i] = rand;
}
console.log('old : ' + array);
for (let i = 0; i < array.length; i++) {
    copArrey[i] = array[i];
}
console.log('new : ' + copArrey);
 */
// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
/* 
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
 */
/* 
let count = 0;
while(count<array.length){
console.log(array[count]);
    count++;
}
 */
// 2. перебрати його циклом for
/* 
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
 */
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
/* 
while(count<array.length){
    if(array[count]%2)
    console.log(array[count]);
        count++;
    }
 */
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
/* 
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
        console.log(array[i]);
    }
}
 */
// 5. перебрати циклом while та вивести  числа тільки парні  значення
/* 
while (count < array.length) {
    if (!(array[count] % 2))
        console.log(array[count]);
    count++;
}
 */
// 6. перебрати циклом for та вивести  числа тільки парні  значення
/* 
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
}
 */
// 7. замінити кожне число кратне 3 на слово "okten"

/* for (let i = 0; i < array.length; i++) {
    if (!(array[i] % 3)) {
        array[i] = "okten";
    }
}
console.log(array);
 */
// 8. вивести масив в зворотньому порядку.
/* 
for (let i = 0; i < array.length; i++) {
    console.log(array[(array.length - 1) - i]);
}
 */
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
/*
 let count = 0;
while (count < array.length) {
    console.log(array[(array.length - 1) - count]);
    count++;
}
 */
// 10
//  створити пустий масив та :
/* 
let arr = [];
 */
// - заповнити його 50 парними числами за допомоги циклу.
/* 
for (let i = 0, j = 0; arr.length < 50; i++) {
    if (!(i % 2)) {
        arr[j] = i;
        console.log(arr[j]);
        j++;
    }
}
 */
// - заповнити його 50 непарними числами за допомоги циклу.
/* 
for (let i = 0, j = 0; arr.length < 50; i++) {
    if (i % 2) {
        arr[j] = i;
        console.log(arr[j]);
        j++;
    }
}
 */
// 1. Створити пустий масив та :
/* let arr = []; */
//        a. заповнити його 50 парними числами за допомоги циклу.
/*
for (let i = 0, j = 0; arr.length < 50; i++) {
    if (!(i % 2)) {
        arr[j] = i;
        console.log(arr[j]);
        j++;
    }
}
 */
//        b. заповнити його 50 непарними числами за допомоги циклу.
/*
for (let i = 0, j = 0; arr.length < 50; i++) {
    if (i % 2) {
        arr[j] = i;
        console.log(arr[j]);
        j++;
    }
}
 */
//        c. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
/* 
let array = [];

for (let i = 1; i <= 200; i++) {
    let rand = parseInt(Math.random() * 724 + 8);
    array[i] = rand;
}
console.log(array);
 */
//  2. Вивести за допомогою console.log кожен третій елемен
/* 
for (let i = 0; i < array.length; i++) {
    if (i % 3 == 0) {
        console.log(array[i]);
    }
}
 */
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
/* 
for (let i = 0; i < array.length; i++) {
    if (i % 3 == 0 && !(array[i] % 2)) {
        console.log(array[i]);
    }
}
 */
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

/* let newArr = [];
for (let i = 0; i < array.length; i++) {
    if (i % 3 == 0 && !(array[i] % 2)) {
        newArr.push(array[i]);
        console.log(array[i]);
    }
}
console.log(newArr);
 */
//  5. Вивести кожен елемент масиву, сусід зпарва якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
/* 
let array = [1, 2, 3, 5, 7, 9, 56, 8, 67];

for (let i = 0; i < array.length - 1; i++) {

    if (array[i + 1] % 2 == 0) {
        console.log(array[i ]);
    }

}
 */
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

/* 
let array = [100, 250, 50, 168, 120, 345, 188];
let average_number;
let sum = 0;

for (const elem of array) {
    sum += elem;
}
average_number = sum / array.length;
console.log(sum);
 */

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
/* 
let array = [];
let newarray = [];

for (let i = 0; i < 10; i++) {
    array[i] = parseInt(Math.random() * 99 + 1);
}
console.log(array);

for (let elem of array) {
    newarray.push(elem * 5)
}
console.log(newarray);
 */
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
/* 
let array = ['asdasd', 4, 'ttttt', 2.3, 'dsd', 3, 'ffff', false, 567, 'vvvvv', true, 3456];
let newarray = [];
for (let elem of array) {
    if (typeof elem == "number") {
        newarray.push(elem);
    }
}
 */

// __________________________________________________________________________________________________________________
//                                                                     Додатково
// __________________________________________________________________________________________________________________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
/* 
let array = ['a', 'b', 'c'];
let world = '';
for (let elem of array) {
    if (typeof elem == "string")
        world += elem;
}
console.log(world);
 */
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

/* 
let array = ['a', 'b', 'c'];
let world = '';
let count = 0;
while (count < array.length) {
    if (typeof array[count] == "string")
        world += array[count];
    count++;
}
console.log(world);
 */
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let array = ['a', 'b', 'c'];
let world = '';
for (let elem of array) {
    if (typeof elem == "string")
        world += elem;
}
console.log(world);












