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

        FensterHinzufuegen(db1[i].Name_Set);
        
        
    }

    

}, 100);








function FensterHinzufuegen(Ueberschrift) {
    setsContainer.innerHTML += `
        <div class="Set">
            <div class="SetUeberschrift">
                <p>${Ueberschrift}</p>
            </div>
        </div>
    `;

}





/* Funktion die die seite Memory öffnet und alle nötigen infos übergibt
function MemoryOEffnen("Json mit memory Infos"){

}*/

