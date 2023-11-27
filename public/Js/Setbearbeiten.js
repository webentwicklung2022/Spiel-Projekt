
var popup = document.getElementById("Popup");
var PopupArtVomQuiz = document.getElementById("PopupArtVomQuiz");


function Popupoeffnen() {
    

        popup.style.display = "block";

}

function PopupSchliessen() {
    

    popup.style.display = "none";

}

function PopupArtVomQuizoeffnen() {
    

  PopupArtVomQuiz.style.display = "block";

}

function PopupArtVomQuizSchliessen() {


  PopupArtVomQuiz.style.display = "none";

}



function WechselZuSeterstellen(){

    window.location.href = "/QuizSeterstellen";
}





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
    setsContainer.innerHTML += `<div  class="Set">

    <div class="loeschen" onclick="Popupoeffnen()">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
      </svg>
      </div>
    
      <div class="bearbeiten">
    
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
          </svg>
    
      </div>
    
    
      <div class="SetUeberschrift">
    <p >${Ueberschrift}</p>
    </div>
    
    </div>

    `;

}

function goBack() {
    window.history.back();
  }



  function seiteOeffnen(){

    var ausgewahltesSpiel = checkRadio();

    switch (ausgewahltesSpiel){
      case "Memory":
        window.location.href = "/QuizSeterstellen";
        break;

      case "Karteikarten":
        window.location.href = "/";
        break;

      case "Quiz":
        window.location.href = "/";
        break;

    }

  }  





  function checkRadio() {
    var radios = document.getElementsByName('flexRadioDefault');
    
    for (var i = 0; i < radios.length; i++) {

        if (radios[i].checked) {
            var label = document.querySelector('label[for=' + radios[i].id + ']');
            
            return label.innerText;
        }
    }

    alert("Bitte wähle eine Option aus.");
}











