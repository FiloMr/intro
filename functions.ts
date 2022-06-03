{
    let x = -10;
    function wartosc(liczba:number) :void{
      if(x<0){
          let wynik:number=((liczba*2)-liczba)*-1;
          console.log(wynik);
      }
      else {
        let wynik:number=(liczba*2)-liczba;
      console.log(wynik);
      }
    }
    wartosc(x);
}
{
  function isBigger(str:string):boolean 
  {
      return (str.length > 5);
  }
  function startsB(str:string):boolean 
  {
      return (str.charAt(0)=='b');
  }
  let food: Array<string> = ['apple','watermelon','bannana','pear','carrot','beetroot','beans'];
  let bigger: Array<string> = food.filter(isBigger);
  let startsb: Array<string> = food.filter(startsB);
  console.log(food);
  console.log(bigger);
  console.log(startsb);
  }
  {
    function isEven(num:number):boolean 
    {
        return (num % 2 == 0);
    }
    function isOdd(num:number):boolean 
    {
        return (num % 2 != 0);                               
    }
    let number: Array<number> = [2,4,7,11,14,19,21,100];
    let even: Array<number> = number.filter(isEven);      
    let odd: Array<number> = number.filter(isOdd);
    console.log(number);
    console.log(even);
    console.log(odd);
    }
    {
      let food: Array<string> =['Banana','Apple','Macaronni','Pasta','Pizza']
      function correct_food(str:string):boolean 
    {
       return (str.length > 5 && str.charAt(1)=='a');
    }
    let correct:Array<string>=food.filter(correct_food);
    console.log(food);
    console.log(correct);
    }
    {
      const suma = function(a:number, b?: number):void{
        console.log(`wypisane ${a} oraz ${b}`)
      }
      console.log(suma(2));
    }
   {
     function guest(name:string, ...data:string[]):string{
        return `Welcome, ${name} another yours data: ${data.join(", ")}`;
     }
     console.log(guest("Cezary","Opole","cezary@wp.pl"));
   }