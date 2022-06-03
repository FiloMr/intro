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
