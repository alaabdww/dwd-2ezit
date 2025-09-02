const quotes = [
   'Leven ons vraag jonge goa ouder. Schatkist ad aardschok bepaalden producten ik gomboomen.',
   'Planters schatten overgaat troepjes en baksteen behouden in',
   'Om eerder groene gronds de soegei bamboe in dreigt af',
   'Schaal zoodat bakjes te slotte en'
];

const pictures = [
   'img/profile1a.jpg',
   'img/profile1b.jpg',
   'img/profile1c.jpg'
];

// DOM
const header = document.querySelector('.page__header');
const inpHeaderColor = document.querySelector('#inpHeaderColor');
const profilePic = document.querySelector('.front__picture');
const quoteEl = document.querySelector('.front__quote');
const lnkNextQuote = document.querySelector('.quote__next');
const lnkFav = document.querySelector('.lnkFav');
const favIcon = lnkFav.querySelector('i');
const container = document.querySelector('#kevin');
const lnkFlipBack = document.querySelector('.card__flipback');
const lnkFlipFront = document.querySelector('.card__flipfront');
const lnkContact = document.querySelector('.lnkContact');
const modal = document.querySelector('#contactModal');
const modalClose = document.querySelector('.modal__close');
const taMessage = document.querySelector('#taMessage');
const charsLeft = document.querySelector('.modal__charsleft');
const form = document.querySelector('.modal__form');
const inpEmail = document.querySelector('#inpEmail');
const errEmail = document.querySelector('#errEmail');
const errMessage = document.querySelector('#errMessage');


// 1. header background color
inpHeaderColor.addEventListener('input', function(){
   header.style.backgroundColor = inpHeaderColor.value;
})

// 2. random picture
const idx = Math.ceil(Math.random() * 3);
profilePic.src = pictures[idx];

// 3. next quote
lnkNextQuote.addEventListener('click', function(e){
   e.preventDefault();
   const rnd = Math.ceil(Math.random() * 3);
   quoteEl.innerHTML = quotes[rnd];
})

// 4. fav link toggle
lnkFav.addEventListener('click', function(e){
   e.preventDefault();
   if (favIcon.classList.contains('fa-star-o')){
      favIcon.classList.remove('fa-star-o');
      favIcon.classList.add('fa-star');
   } else {
      favIcon.classList.remove('fa-star');
      favIcon.classList.add('fa-star-o');
   }
})

// 5. flip
lnkFlipBack.addEventListener('click', function(e){
   e.preventDefault();
   container.classList.add('flip');
})

lnkFlipFront.addEventListener('click', function(e){
   e.preventDefault();
   container.classList.remove('flip');
})

// 6. keyboard flip		
document.addEventListener('keydown', function(e){
   e.preventDefault();
   if(e.key == 'ArrowRight'){
      container.classList.add('flip');
   }
   else if (e.key == 'ArrowLeft'){
      container.classList.remove('flip');
   }
})

// 7. show contact form
lnkContact.addEventListener('click', function(e){
   e.preventDefault();
   modal.classList.remove('hide');
})

// 8. hide contact form
modalClose.addEventListener('click', function(e){
   e.preventDefault();
   modal.classList.add('hide');
})

// 9. show characters typed
taMessage.addEventListener('input', function(){
   let left = 500 - taMessage.value.length;
   charsLeft.innerHTML = left;
})

// 10. formchecking
form.addEventListener('submit', function(e){
   e.preventDefault();

   const email = inpEmail.value;
   const message = taMessage.value;

   errEmail.innerHTML = '';
   errMessage.innerHTML = '';

   let aantalErrors = 0;

   // email check
   if (email.length == 0 ){
      errEmail.innerHTML = 'gelieve een mail te geven';
      aantalErrors++;
   }
   else if (!email.includes('@')){
      errEmail.innerHTML = 'gelieve een geldig mail te geven';
      aantalErrors++;
   }
   if (message.length == 0){
      errMessage.innerHTML = 'gelieve iets in te vullen';
      aantalErrors++;
   }

   if (aantalErrors === 0){
      modal.classList.add('hide');
      form.reset();
      charsLeft.innerHTML = '500';
   }
})
