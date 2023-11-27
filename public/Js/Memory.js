var db1= [];
var Sets = document.getElementById("Sets");
var set = "1";
if(Sets.value !== ""){
  set = Sets.value;
}



async function fetchData() {
    try {
      const response = await fetch("http://localhost:5050/abfrage/select%20*%20from%20karten%20where%20Set_ID%20=%20" + set);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      
  
      const data = await response.json();
      // Hier kannst du mit den geladenen Daten arbeiten
      db1 = data;
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  // Aufruf der Funktion
  fetchData();
  


  


setTimeout(function () {
    console.log(db1[0].Frage);
    einfuegen();
}, 100);



const Container = document.getElementsByClassName("Container");
var db = [
    { Begriff: "CPU", Antwort: "Central Processing Unit" },
    { Begriff: "RAM", Antwort: "Random Access Memory" },
    { Begriff: "GPU", Antwort: "Graphics Processing Unit" },
    { Begriff: "SSD", Antwort: "Solid State Drive" },
    { Begriff: "HDD", Antwort: "Hard Disk Drive" },
    { Begriff: "Motherboard", Antwort: "Mainboard" },
    { Begriff: "PSU", Antwort: "Power Supply Unit" },
    { Begriff: "BIOS", Antwort: "Basic Input/Output System" },
    { Begriff: "OS", Antwort: "Operating System" },
    { Begriff: "LAN", Antwort: "Local Area Network" },
   
  ];

var fliped;
var nr = 10;
var zufälig1 = [0,1,2,3,4,5,6,7,8,9];
var zufälig2 = [0,1,2,3,4,5,6,7,8,9];

function shuffleArray(array) {
    // Funktion, die einen zufälligen Wert zwischen -0.5 und 0.5 zurückgibt
    function randomSort() {
      return Math.random() - 0.5;
    }
  
    // Das Array mit der Vergleichsfunktion sortieren
    array.sort(randomSort);
  }

 
  

function einfuegen(){
    shuffleArray(zufälig1)
    shuffleArray(zufälig2)
    for(var x = 0; x < db1.length; x++){
        Container[0].innerHTML += `<div class="karten" onclick="flip(${x})">
        <div class="innerBox">
         <div class="vorne"></div>
         <div class="hinten" >${db1[zufälig1[x]].Frage}</div>
         <input class="var" type="hidden" value="false">
         <input class="index" type="hidden" value="${db1[zufälig1[x]].ID}">
        </div>
       </div>`
    }
    for(var x = 0; x < db1.length; x++){
        Container[0].innerHTML += `<div class="karten" onclick="flip(${nr})">
        <div class="innerBox">
         <div class="vorne"></div>
         <div class="hinten" >${db1[zufälig2[x]].Antwort}</div>
         <input class="var" type="hidden" value="false">
         <input class="index" type="hidden" value="${db1[zufälig2[x]].ID}">
        </div>
       </div>`
       nr++
    }
   
}



var ids = [];
var innerBox = document.getElementsByClassName("innerBox");
var karten = document.getElementsByClassName("karten");
var v = document.getElementsByClassName("var"); 
var body = document.body;

function flip(id){

   
       
    

   if(ids.length < 2){
    ids.push(id);
   }else {
    ids.length = 0;
    ids.push(id);
   }
    
   

    
    
       fliped = v[id].value;
       
        if (fliped == "false"){
            innerBox[id].classList.add('flipped');  
            v[id].value = true;
        }else{
            innerBox[id].classList.remove('flipped');
            v[id].value = false;
        }

       
          
        match(id);
      
        
    

   

   
}

var gewonnen =[];

function match(id){


       
        var index = document.getElementsByClassName("index"); 
        
        gewonnen.push(index[id].value) 
        if(gewonnen[0] === gewonnen[1] && gewonnen.length == 2 && ids[0] !== ids[1]){
            gewonnen.length = 0;
            innerBox[ids[0]].classList.add('still');
            innerBox[ids[1]].classList.add('still');
            setTimeout(function () {
                karten[ids[0]].classList.add('richtig');
                karten[ids[1]].classList.add('richtig');
            }, 500);
           
           return true;
          

        } 
        
        if(gewonnen.length == 2 && gewonnen[0] !== gewonnen[1]){
            gewonnen.length = 0;
            setTimeout(function () {
            innerBox[ids[0]].classList.remove('flipped');
            innerBox[ids[1]].classList.remove('flipped');
            v[ids[0]].value = false;
            v[ids[1]].value = false;
            }, 800);
            
            return false;
            

        }

        if(gewonnen.length > 1 && ids[0] == ids[1]){
            gewonnen.length = 0;
            setTimeout(function () {
            innerBox[ids[0]].classList.remove('flipped');
            innerBox[ids[1]].classList.remove('flipped');
            v[ids[0]].value = false;
            v[ids[1]].value = false;
            
            }, 800);
            return false;
            

        }
        
            
        
 
     
       
       
  


    




}





