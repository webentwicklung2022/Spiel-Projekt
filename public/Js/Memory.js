
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



function einfuegen(){
      
    for(var x = 0; x < db.length; x++){
        Container[0].innerHTML += `<div class="karten" onclick="flip(${x})">
        <div class="innerBox">
         <div class="vorne"></div>
         <div class="hinten" >${db[x].Antwort}</div>
         <input class="var" type="hidden" value="false">
         <input class="index" type="hidden" value="${x}">
        </div>
       </div>`
    }
    for(var x = 0; x < db.length; x++){
        Container[0].innerHTML += `<div class="karten" onclick="flip(${nr})">
        <div class="innerBox">
         <div class="vorne"></div>
         <div class="hinten" >${db[x].Begriff}</div>
         <input class="var" type="hidden" value="false">
         <input class="index" type="hidden" value="${x}">
        </div>
       </div>`
       nr++
    }
   
}

einfuegen();

var ids = [];

function flip(id){
   
    ids.push(id);
   

    var innerBox = document.getElementsByClassName("innerBox");
     var v = document.getElementsByClassName("var"); 
       fliped = v[id].value;
       console.log(fliped);
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

        if(gewonnen[0] === gewonnen[1] && gewonnen.length == 2){
           return true;
           gewonnen = [];
        }else if(gewonnen.length == 2){
            return false;
            gewonnen = [];
        }
 
     
       
       console.log(gewonnen);
  


    




}



