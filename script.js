// const random_number = Math.random();
//
// alert(number);
//
// const random_number = Math.round(Math.random() * 10);

function myRandom (from, to)  {
    return Math.round((Math.random() * (to - from + 1)) + from);
}

let rand_num1 = myRandom(1,9);   //задаем диапазон для первого числа от 1 до 9
rand_num2 = myRandom(1,7);   //задаем диапазон для второго числа от 1 до 7
sum = rand_num1 + rand_num2; //вычисляем сумму двух случайных чисел
console.log(rand_num1)