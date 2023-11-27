var db1 = [];
var Sets = document.getElementById("Sets");
var set = "1";
if (Sets.value !== "") {
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


var fliped;

var dbz = [];


function arrayMischen(array) {
  // Funktion, die einen zufälligen Wert zwischen -0.5 und 0.5 zurückgibt
  function randomSort() {
    return Math.random() - 0.5;
  }

  // Das Array mit der Vergleichsfunktion sortieren
  array.sort(randomSort);
}




function einfuegen() {

  for (var x = 0; x < db1.length; x++) {
    dbz.push(`
      <div class="innerBox">
       <div class="vorne"><svg xmlns="http://www.w3.org/2000/svg" height="60" fill="#805938" viewBox="0 -960 960 960" width="60"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></div>
       <div class="hinten" >${db1[x].Frage}</div>
       <input class="var" type="hidden" value="false">
       <input class="index" type="hidden" value="${db1[x].ID}">
      </div>
     `);

  }
  for (var x = 0; x < db1.length; x++) {
    dbz.push(`
    <div class="innerBox">
     <div class="vorne"><svg xmlns="http://www.w3.org/2000/svg" height="60" fill="#805938" viewBox="0 -960 960 960" width="60"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></div>
     <div class="hinten" >${db1[x].Antwort}</div>
     <input class="var" type="hidden" value="false">
     <input class="index" type="hidden" value="${db1[x].ID}">
    </div>
   `);


  }


  arrayMischen(dbz);


  for (var x = 0; x < 20; x++) {
    Container[0].innerHTML += `<div class="karten" onclick="flip(${x})">${dbz[x]}</div>`;
  }


}



var ids = [];
var innerBox = document.getElementsByClassName("innerBox");
var karten = document.getElementsByClassName("karten");
var v = document.getElementsByClassName("var");
var body = document.body;

function flip(id) {





  if (ids.length < 2) {
    ids.push(id);
  } else {
    ids.length = 0;
    ids.push(id);
  }





  fliped = v[id].value;

  if (fliped == "false") {
    innerBox[id].classList.add('flipped');
    v[id].value = true;
  } else {
    innerBox[id].classList.remove('flipped');
    v[id].value = false;
    tMoeglich();
  }



  match(id);

 







}

var gewonnen = [];

function match(id) {
    

  
  var index = document.getElementsByClassName("index");

  gewonnen.push(index[id].value)
  if (gewonnen[0] === gewonnen[1] && gewonnen.length == 2 && ids[0] !== ids[1]) {
    gewonnen.length = 0;
    tNichtMoeglich()
    innerBox[ids[0]].classList.add('still');
    innerBox[ids[1]].classList.add('still');
    setTimeout(function () {
      karten[ids[0]].classList.add('richtig');
      karten[ids[1]].classList.add('richtig');
      tMoeglich();
    }, 500);
    
    return true;


  }

  if (gewonnen.length == 2 && gewonnen[0] !== gewonnen[1]) {
    
    gewonnen.length = 0;
    tNichtMoeglich()
    setTimeout(function () {
      
      innerBox[ids[0]].classList.remove('flipped');
      innerBox[ids[1]].classList.remove('flipped');
      v[ids[0]].value = false;
      v[ids[1]].value = false;
      tMoeglich();
    }, 800);
    
   
    return false;


  }

  if (gewonnen.length > 1 && ids[0] == ids[1]) {
    gewonnen.length = 0;
    tNichtMoeglich()
    setTimeout(function () {
     
      innerBox[ids[0]].classList.remove('flipped');
      innerBox[ids[1]].classList.remove('flipped');
      v[ids[0]].value = false;
      v[ids[1]].value = false;
      tMoeglich();
    }, 800);
   
    return false;


  }





  
  







}
var cover = document.getElementById("cover");


function tMoeglich(){
  console.log("test")
 cover = document.getElementsByClassName("cover");
 cover[0].classList.add('dnone');
  
}

function tNichtMoeglich(){
  cover =  document.getElementsByClassName("cover");
  cover[0].classList.remove('dnone');
 
}




