let hoogsteBieder = "niemand";
let hoogsteBod = 0;

const form = document.querySelector('form');
const naam = document.querySelector('#naam');
let bod = document.querySelector('#bod');
let bericht = document.querySelector('#bericht');


let btnPlaats = document.querySelector('#plaatsBtn');

form.addEventListener('submit', function(e) {
   e.preventDefault();
   
   let naamwaarde = naam.value.trim();
   let bodWaarde = parseFloat(bod.value);

   if (bodWaarde > hoogsteBod){
      hoogsteBieder = naamwaarde;
      hoogsteBod = bodWaarde;
      bericht.innerHTML = `gefeliciteerd! je hebt momenteel het hoogste bod`;
   }
   else{
      bericht.innerHTML = `jammer! ${hoogsteBieder} heeft een hoger bod` ;
   }
})
