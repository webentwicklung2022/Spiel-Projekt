/*document.getElementById("");*/
/*document.getElementsByClassName*/

var db1= [];
var setsContainer = document.getElementById("SetsContainer");

async function fetchData() {
    try {
const response = await fetch("http://localhost:5050/abfrage/select%20*%20from%20sets");


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


fetchData();



setTimeout(function () {
   
   


    for(var i = 0; i < db1.length; i++){

        FensterHinzufuegen(db1[i].Name_Set,db1[i].ID);
        
        
    }

    

    

}, 100);








function FensterHinzufuegen(Ueberschrift,ID) {
    setsContainer.innerHTML += `
        <div class="Set">
            <div class="SetUeberschrift" onclick="SendID(${ID})">
                <p>${Ueberschrift}</p>
            </div>
            <form action="/setausgewaehlt" method="post" class ="forms">
            <input type="hidden" id="ID" name="id" value="${ID}">
            </form>
        </div>
    `;

}





function SendID(ID){


   var forms = document.getElementsByClassName("forms");
   

       forms[ID-1].submit();
    
        
    
        
    
  
   
   

   
//   form_ID.submit()
   

  
   
}




/* Funktion die die seite Memory öffnet und alle nötigen infos übergibt
function MemoryOEffnen("Json mit memory Infos"){

}*/

function goBack() {
    window.history.back();
  }