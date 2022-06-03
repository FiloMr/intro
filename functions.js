"use strict";
{
    let x = -10;
    function wartosc(liczba) {
        if (x < 0) {
            let wynik = ((liczba * 2) - liczba) * -1;
            console.log(wynik);
        }
        else {
            let wynik = (liczba * 2) - liczba;
            console.log(wynik);
        }
    }
    wartosc(x);
}
{
    function isBigger(str) {
        return (str.length > 5);
    }
    function startsB(str) {
        return (str.charAt(0) == 'b');
    }
    let food = ['apple', 'watermelon', 'bannana', 'pear', 'carrot', 'beetroot', 'beans'];
    let bigger = food.filter(isBigger);
    let startsb = food.filter(startsB);
    console.log(food);
    console.log(bigger);
    console.log(startsb);
}
{
    function isEven(num) {
        return (num % 2 == 0);
    }
    function isOdd(num) {
        return (num % 2 != 0);
    }
    let number = [2, 4, 7, 11, 14, 19, 21, 100];
    let even = number.filter(isEven);
    let odd = number.filter(isOdd);
    console.log(number);
    console.log(even);
    console.log(odd);
}
{
    let food = ['Banana', 'Apple', 'Macaronni', 'Pasta', 'Pizza'];
    function correct_food(str) {
        return (str.length > 5 && str.charAt(1) == 'a');
    }
    let correct = food.filter(correct_food);
    console.log(food);
    console.log(correct);
}
{
    const suma = function (a, b) {
        console.log(`wypisane ${a} oraz ${b}`);
    };
    console.log(suma(2));
}
{
    function guest(name, ...data) {
        return `Welcome, ${name} another yours data: ${data.join(", ")}`;
    }
    console.log(guest("Cezary", "Opole", "cezary@wp.pl"));
}
