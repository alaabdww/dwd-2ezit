let figShoe = document.querySelector('#figShoe');
let img = figShoe.querySelector('img');
let caption = figShoe.querySelector('figcaption');
let properties = document.querySelectorAll('.properties');
let frmOrder = document.querySelector('#frmOrder');
frmOrder.setAttribute('novalidate', 'novalidate');
let inpEmail = document.querySelector('#inpEmail');
let msgEmail = document.querySelector('#msgEmail');
let selMeasure = document.querySelector('#selMeasure');
let msgMeasure = document.querySelector('#msgMeasure');
let accessoires = document.querySelector('#accessoires');
let lblMessage = document.querySelector('#lblMessage');
const model = document.querySelector('#model');
const modelLinks = model.querySelectorAll('a'); 
let captionSpan = caption.querySelector('span');

console.log('modelLinks:', modelLinks.length);


modelLinks.forEach(lnk => {
   lnk.addEventListener('click', function(e){
      e.preventDefault();
      img.src = this.href;
      captionSpan.textContent = this.textContent;

      const oude = model.querySelector('.selected');
      if (oude){
         oude.classList.remove('selected');
      }
      this.classList.add('selected');
   })
})

frmOrder.addEventListener('submit', function(e){
   e.preventDefault();
   msgEmail.innerHTML = '';
   msgMeasure.innerHTML = '';

   let numErrors = 0;

   if (inpEmail.value == ''){
      msgEmail.innerHTML = 'Gelieve uw e-mailadres in te vullen';
      numErrors++;
   }

   if (selMeasure.value == ''){
      msgMeasure.innerHTML = 'Gelieve uw maat in te vullen';
      numErrors++;
   }

   if (numErrors == 0){
      let accesoiresList = [];
      let somExtra = 0.00;
      const gekozenAccesoires = accessoires.querySelectorAll('input:checked')   
      gekozenAccesoires.forEach(cb => {
         accesoiresList.push(cb.name);
         somExtra += parseFloat(cb.value);
      });
      const gekozenSchoen = model.querySelector('.selected').textContent;
      const gekozenMaat = selMeasure.value;
      const basisPrijs = 54.99;
      const totaalPrijs = (basisPrijs + somExtra);
      let accesoiresString = '';
      accesoiresList.forEach(a => {
         accesoiresString += a + ', ';
      });

      lblMessage.innerHTML = `Je keuze: ${gekozenSchoen} maat ${gekozenMaat}, ${accesoiresString} (totaalprijs: €${totaalPrijs.toFixed(2)})`;
   }
   

})
