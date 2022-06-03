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
  console.log(bigger);
  console.log(startsb);
  }