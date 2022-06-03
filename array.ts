{
let owoce: string[]=[`jablko`,`arbuz`,`banan`,`gruszka`];
console.log(owoce.length);
console.log(owoce.sort());
owoce.push(`ananas`);
owoce.shift();
owoce.pop();
owoce.unshift(`ananas`);
owoce.reverse();

for(let x of owoce){
    console.log(x)
}

let liczby: number[]=[2,4,1];
console.log(liczby.reverse());

let warzywa: string[]=[`marchew`, `burak`, `pietruszka`, `kalafior`];
let split: string[]=owoce.concat(warzywa);
console.log(split);
//let plus_split:string[]= owoce + warzywa; In typescript we cannot use + to split array but in js we can
//console.log(typeof(plus_split));
console.log(typeof(owoce));
//console.log(plus_split);
let spread =[...owoce,...warzywa];
console.log(spread);
owoce.splice(1,1,`kiwi`);
console.log(owoce);

let bob: [string, number]=[`Jan Kowalski`, 40];
console.log(`Nazywam sie ${bob[0]} i mam ${bob[1]} lat.`);
}