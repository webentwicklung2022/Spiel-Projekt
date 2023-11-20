
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





