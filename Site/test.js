function testfunction1() {
    document.getElementById("test").innerHTML = "Hello Button";
    }
    function testfunction2() {
    document.getElementById("tes").innerHTML = "Hello Div";
    }


    /*function myTest(){
        console.log("Testiram x ="+ x)}
        function foo(){ let x = 3;}

      var content = document.getElementsById("content")
      var button = document.getElementsById("Click")

      function Dugme(){
        var ime = "Aleksandar";
        var prezime = " Obuhov";
        var zajedno = ime + prezime;     
        document.getElementById("test").innerHTML = zajedno;
    } */ 

   let btn = document.getElementsById("click")
    function Poruka(){
     let mess = prompt("Sta vas interesuje?");
     localStorage.setItem('poruka', mess);
     
   }

   document.querySelector('#ev').addEventListener('click', btn.onclick = function()
   {document.getElementById("test").innerHTML = "Event radi"; });

   let el = document.querySelector('#mess');
   if(!localStorage.getItem('mess')) {saveMess();}
   el.textContent = localStorage.getItem('mess')


   let projekti {
     name = "Proj",
     Projekat : [
       { p1 = "3D",
         podaci = "text"
       }
      ]
   }
   function Fill(obj){
     let p1El = document.querySelector('#menu');
     let podaciEl = document.querySelector('#menu');

     p1El.textContent = obj['naziv'];
     
   }
    