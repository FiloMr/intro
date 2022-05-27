"use strict";
let trip_road = 16;
let price = 0;
if (trip_road <= 15) {
    price = 3;
}
else if (trip_road >= 16 && trip_road <= 40) {
    price = 1.5 + (trip_road * 0.20);
}
else if (trip_road > 40) {
    price = 1 + (trip_road * 0.10);
}
else
    console.log(`Wprowadziles zle wartosci`);
console.log(`Długosc trasy to ${trip_road} kilometrow i cena biletu to ${price} zlotych`);
