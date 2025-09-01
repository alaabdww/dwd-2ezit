// CONSTANTS
// =========
const form = document.querySelector('.form');
const selCats = document.querySelector('#selCats');
const msgCats = document.querySelector('#msgCats');
const inpSearch = document.querySelector('#inpSearch');
const btnGo = document.querySelector('#btnGo');
const sidekick = document.querySelector('.sidekick');
const span = sidekick.querySelector('span');

// FUNCTIONS
// =========
async function fetchCategories() {
   const url = 'https://api.chucknorris.io/jokes/categories';
   const resp = await fetch(url);
   if (!resp.ok){
      console.log('opvragen van data is mislukt');
      return;
   }

   const data = await resp.json();

   data.forEach(el => {
      selCats.innerHTML += `<option value="${el}">${el}</option>`;
   });
   msgCats.innerHTML = 'Fetching done';
}

async function fetchJokeByCategory(category) {
   const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
   const resp = await fetch(url);
   if (!resp.ok){
      console.log('opvragen van data is mislukt');
      return;
   }

   const data = await resp.json();
   span.innerHTML = `${data.value}`;
   sidekick.classList.add('show');
}

async function fetchByQuery(query){
   const url = `https://api.chucknorris.io/jokes/search?query=${query}`;
   const resp = await fetch(url);
   if (!resp.ok){
      console.log('opvragen van data is mislukt');
      return;
   }

   const data = await resp.json();
   span.innerHTML = `${data.result[1].value}`
   sidekick.classList.add('show');
}

// API CALLS
// =========

// ...

// EVENT HANDLERS
// ==============
fetchCategories();
selCats.addEventListener('change', function(){
   const category = selCats.value;
   fetchJokeByCategory(category);
})

btnGo.addEventListener('click', function(e){
   e.preventDefault();
   const query = inpSearch.value;
   fetchByQuery(query);
})

// EVENTS
// ======

// ...

// STARTUP
// =======

async function startApp() {
   // fetch categories and fill dropdown list
   // ...
}
startApp();
