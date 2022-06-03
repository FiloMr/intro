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
    console.log(bigger);
    console.log(startsb);
}
