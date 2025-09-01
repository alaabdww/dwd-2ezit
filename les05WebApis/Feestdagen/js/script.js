// ===========================================
// DOM
// ===========================================
let datepicker = document.querySelector('#datepicker');
let buttonCheck = document.querySelector('#buttonCheck');
let resultaat = document.querySelector('#resultaat');
const API_KEY = '5e51fa45ce8e4e259f57a65e13da72e7';
// ===========================================
// FUNCTIONS
// ===========================================
async function searchHoliday(year, month, day) {
   let url = 'https://holidays.abstractapi.com/v1/';
   const params = new URLSearchParams();
   params.append('api_key', API_KEY);
   params.append('country', 'BE' );
   params.append('year', year);
   params.append('month', month);
   params.append('day', day);
   url += '?' + params.toString();

   const resp = await fetch(url);
   if (!resp.ok){
      console.log('opvragen mislukt');
      return;
   }
   const data = await resp.json();
   if (data.length === 0){
      resultaat.classList.add('geen-feestdag');
      resultaat.textContent = `❌ ${datepicker.value} is geen feestdag.`;
   }
   if (data.length > 0){
      resultaat.classList.add('feestdag');
      resultaat.textContent = `🎉${datepicker.value} is een feestdag!🎉`;
   }
}

// ===========================================
// EVENTS
// ===========================================
buttonCheck.addEventListener('click', function(e){
   e.preventDefault();
   resultaat.classList.remove('feestdag', 'geen-feestdag');
   if (datepicker.value === ''){
      resultaat.innerHTML = 'Je bent vergeten een datum in te vullen.';
      return;
   }

   let dateValue = datepicker.value;
   let parts = dateValue.split('-');
   let year = parts[0];
   let month = parts[1];
   let day = parts[2];
   searchHoliday(year, month, day);
})

