const buttons = document.querySelectorAll('.filters button');
const slider = document.querySelector('#slider-label input');
let img = document.querySelector('img');
let sliderTxt = document.querySelector('#sliderValue')

const EFFECT_CLASSES = ['fx-normal', 'fx-grayscale', 'fx-sepia', 'fx-hue', 'fx-blur'];

buttons.forEach(btn => {
   btn.addEventListener('click', function(e){
      e.preventDefault()
      const el = e.target;
      let vorige = document.querySelector('.filters .active');
      if (vorige){
         vorige.classList.remove('active');
      }
      this.classList.add('active');
      img.classList.remove(...EFFECT_CLASSES)
      img.classList.add('fx-' + this.dataset.verandering);
   })
});

slider.addEventListener('input', function(){
   img.style.opacity = this.value;
   sliderTxt.innerHTML = `${parseInt(this.value * 100)}%`
})
