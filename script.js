let submit = document.getElementById("submit");
let add = document.getElementById("time");


submit.addEventListener("click", (e) => {
  e.preventDefault();
  add = add.value;
 let newTime = add.setMinutes(1);
 let newDateObj = add+newTime;

  affichage.innerHTML =`dans une heure il sera ${newDateObj}`;


});


// var timeObject = new Date()     
// var seconds = timeObject.getSeconds() + 10;
// timeObject = timeObject + seconds;
