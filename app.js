const input=document.getElementById('inputtask');
const submit=document.getElementById('submit');
const task=document.getElementById('tasks')

submit.addEventListener('click',()=>{
    const taskText=input.value.trim();
    if(taskText !==''){
        const li=document.createElement('li');
        li.innerHTML = `
    <input type="checkbox" class="task-check">
    <span class="task-text">${taskText}</span>
    <i class="fa-solid fa-xmark delete" style="color:red; cursor:pointer; float:right;"></i>
`;

        task.appendChild(li);
        input.value='';
    }else{
        alert('please enter task!')
    }
    
})

  
task.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// Handle checkbox toggle for line-through
task.addEventListener('change', (e) => {
    if (e.target.classList.contains('task-check')) {
        const taskText = e.target.nextElementSibling; // The <span>
        if (e.target.checked) {
            taskText.style.textDecoration = 'line-through';
            taskText.style.color = 'gray';
        } else {
            taskText.style.textDecoration = 'none';
            taskText.style.color = 'black';
        }
    }
});
