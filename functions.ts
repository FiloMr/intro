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
