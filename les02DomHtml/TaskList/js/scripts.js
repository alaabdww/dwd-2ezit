const form = document.querySelector('#frmTask');
const selPriority = document.querySelector('#selPriority');
const datDeadline = document.querySelector('#datDeadline');
const txtTask = document.querySelector('#txtTask');
const btnSubmit = document.querySelector('#btnSubmit');
const tasks = document.querySelector('#tasks');

form.addEventListener('submit', function(e){
   e.preventDefault();

   let priority = selPriority.value;
   let deadline = datDeadline.value;
   let task = txtTask.value;

   let html = `<div class="task">
            <span class="priority priority--${priority} material-icons">assignment</span>
            <p class="tasktext">${task} <span class="deadline">(deadline: ${deadline})</span></p>
            <span class="complete material-icons">more_horiz</span>
         </div>`;
   tasks.innerHTML += html;
   
   form.reset();
})

tasks.addEventListener('click', function(e){
   const el = e.target;
   if (!el.classList.contains('complete')) return;

   if (el.classList.contains('done')){
      el.classList.remove('done');
      el.textContent = 'more_horiz';
      el.parentElement.classList.remove('complete');
   }
   else {
      el.classList.add('done');
   el.textContent = 'done';
   el.parentElement.classList.add('complete');
}

})
