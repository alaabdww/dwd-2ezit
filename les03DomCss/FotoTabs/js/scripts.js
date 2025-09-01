const navFilters = document.querySelectorAll('.nav__filters .filter__tab');
const numFound = document.querySelector('#numFound');
const gallery = document.querySelectorAll('#gallery figure');
let count = 0;
const header__view = document.querySelectorAll('.header__view a');
const galleryBox = document.querySelector('#gallery');

header__view.forEach(lnk => {
   lnk.addEventListener('click', function(e){
      e.preventDefault();

      const vorige = document.querySelector('.header__view a.active');
      if (vorige){
      vorige.classList.remove("active");
         }
      let selected = this.id;
      if (selected == "lnkViewGrid"){
         this.classList.add('active');
         galleryBox.classList.remove('list');
         galleryBox.classList.add('grid');
      }
      else if (selected == "lnkViewList"){
         this.classList.add('active');
         galleryBox.classList.remove('grid');
         galleryBox.classList.add('list');
      }
   })
});


navFilters.forEach(lnk => {
   lnk.addEventListener('click', function(e){
      e.preventDefault();
      const filter = this.getAttribute('data-filter');
      let vorige = document.querySelector('.nav__filters .active');
      if (vorige) {
         vorige.classList.remove('active');
      }
      if (filter === 'alle') {
      this.classList.add('active');
      gallery.forEach(foto => {
         foto.classList.remove('hidden');
         count++;
         });
         numFound.innerHTML = count;
         count = 0;
      }

      if (filter === 'nacht'){
      this.classList.add('active');
      gallery.forEach(foto => {
         if (!foto.dataset.filters.includes('nacht')){
            foto.classList.add('hidden');
         }
         if (foto.dataset.filters.includes('nacht')){
            foto.classList.remove('hidden');
            count++
         }
      });
      numFound.innerHTML = count;
      count = 0;
      }

      if (filter === 'natuur'){
         this.classList.add('active');
         gallery.forEach(foto => {
            if (!foto.dataset.filters.includes('natuur')){
               foto.classList.add('hidden');
            }
            if (foto.dataset.filters.includes('natuur')){
               foto.classList.remove('hidden');
               count++;
            }
         });
         numFound.innerHTML = count;
         count = 0;
      }

      if (filter === 'steden'){
         this.classList.add('active');
         gallery.forEach(foto => {
            if (!foto.dataset.filters.includes('steden')){
               foto.classList.add('hidden');
            }
            if (foto.dataset.filters.includes('steden')){
               foto.classList.remove('hidden');
               count++;
            }
         });
         numFound.innerHTML = count;
         count = 0;
      }
   })
   
});
