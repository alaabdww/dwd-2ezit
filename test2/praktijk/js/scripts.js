const API_KEY = '	live_3Q2zyYdt0eQq7UvSylpeUOolGrhYd0ONT7mktCdShEC3UAYDFNtv6DKzR3fh4xXN';

const selCategory = document.querySelector('#selCategory');
const inpLimit = document.querySelector('#inpLimit');
const btnGo = document.querySelector('#btnGo');
const catsBox = document.querySelector('#cats');

const ENDPOINT = 'https://api.thecatapi.com/v1/images/search';
// 1
async function firstFetch() {
   const url = "https://api.thecatapi.com/v1/images/search?api_key=" + API_KEY;
   const resp = await fetch(url)
   const data = await resp.json();
   console.log(data);
} 
firstFetch();

// ============ opgave 2: met parameters (console) ============
async function secondFetch() {
   let url = ENDPOINT;
   const params = new URLSearchParams();
   params.append('api_key', API_KEY);
   params.append('limit', 3);        // vaste waarden zoals gevraagd
   params.append('category_ids', 1); // 1 = hats
   url += '?' + params.toString();

   const resp = await fetch(url);
   if (!resp.ok) {
      console.log('opvragen (met params) mislukt');
      return;
   }
   const data = await resp.json();
   console.log('met parameters (limit=3, category=1):', data);
}
secondFetch();

// ============ helper: renderen naar DOM ============
function renderCats(list) {
   catsBox.innerHTML = '';
   list.forEach(item => {
      catsBox.innerHTML += `<img src="${item.url}" alt="cat">`;
   });
}

// ============ opgave 3 & 4: DOM weergave + controls ============
btnGo.addEventListener('click', async function () {
   // parameters uit UI
   const limit   = inpLimit.value;      // bv. "3"
   const catId   = selCategory.value;   // bv. "1"

   // request bouwen
   let url = ENDPOINT;
   const params = new URLSearchParams();
   params.append('api_key', API_KEY);
   params.append('limit', limit);
   params.append('category_ids', catId);
   url += '?' + params.toString();

   // fetch
   const resp = await fetch(url);
   if (!resp.ok) {
      console.log('opvragen (UI) mislukt');
      return;
   }
   const data = await resp.json();

   // DOM
   renderCats(data);
});
