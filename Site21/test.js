function testfunction1() {
    document.getElementById("test").innerHTML = "Hello";
    }
    function testfunction2() {
    document.getElementById("tes").innerHTML = "Hello";
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

   /*
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

   let projekti {}
     name = "Proj",
     Projekat : [
       { 
         p1 = "3D",
         podaci = "text"
       }
      ]
   }
   function Fill(obj){
     let p1El = document.querySelector('#menu');
     let podaciEl = document.querySelector('#menu');

     p1El.textContent = obj['naziv'];
     
   }
   */
 let projektii = {
   Projekat1 : [
     {
    name: "3D Landscape",
    description: "Just trying to figure stuff out.",
    program:[ { naziv:"Blender", verzija:"2.9.8", format_fajla:"FBX"} ],
    cena: "200e"
     }
   ],
   Projekat2 : [
    {
   name: "Photo edit",
   description: "Just trying to figure stuff out.",
   program: [ { naziv:"Photoshop", verzija:"CC-2020", format_fajla:"JPG"} ],
   cena: "100e"
    }
  ],
  Projekat3 : [
    {
   name: "Website design",
   description: "Just trying to figure stuff out.",
   program : [ { naziv:"Illustrator", verzija:"CC", format_fajla:"EPS"} ],
   cena: "500e"
    }
  ]
  };
  
  console.log(projektii); 



  /*const url = 'Base.json'; // OVDE JAVLJA GRESKU
  async function getData(){
  const response = await fetch(url);
  const data = await response.json;
  console.log(data);
  }
  getData();
  */

//PISMENI
function text(){
  document.getElementById("paragraf").innerHTML = `${pismeni.dt.map(function(autor){return autor.author })}`;
}

var pismeni = {list: "author", dt: [
  {
      "id": 1,
      "quote": "Life isn’t about getting and having, it’s about giving and being.",
      "author": "Kevin Kruse"
  },
  {
      "id": 2,
      "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
      "author": "Napoleon Hill"
  },
  {
      "id": 3,
      "quote": "Strive not to be a success, but rather to be of value.",
      "author": "Albert Einstein"
  },
  {
      "id": 4,
      "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      "author": "Robert Frost"
  },
  {
      "id": 5,
      "quote": "I attribute my success to this: I never gave or took any excuse.",
      "author": "Florence Nightingale"
  },
  {
      "id": 6,
      "quote": "You miss 100% of the shots you don’t take.",
      "author": "Wayne Gretzky"
  },
  {
      "id": 7,
      "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      "author": "Michael Jordan"
  },
  {
      "id": 8,
      "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
      "author": "Amelia Earhart"
  }
]
}

createElements(kvote);


function createElements(citati){
  var DrugiDiv = document.getElementById("drugi");
  var div1 = document.createElement("div");
  div1.style = "display: inline";
  div1.innerHTML = `${pismeni.dt.map(function(autor){return ` <p> ${autor.id + " " + autor.quote + " " + autor.author} </p> <br>` }).join('')}`;
  DrugiDiv.appendChild(div1);
}
