
let btn = document.querySelector('button')
let ip = document.querySelector('input')
let ul = document.querySelector('ul')

btn.addEventListener('click',()=>{

    if(ip.value===''){
        alert("You must write Someting !")
    }
    else{
    let list = document.createElement('li')
    list.innerText = ip.value;

    let delBtn = document.createElement('i')
    delBtn.classList.add('fa-solid', 'fa-trash', 'delete')
    list.appendChild(delBtn)
    ul.appendChild(list)

    ip.value=''
    saveData();
}
})


ul.addEventListener('click',(event)=>{
if(event.target.nodeName == 'I'){
    let listItem = event.target.parentElement;
    console.log(listItem)
    listItem.remove();
    saveData();
}
else if(event.target.tagName == 'LI'){
    event.target.classList.toggle('checked');
    saveData();
}
})

function saveData(){
    localStorage.setItem("data",ul.innerHTML)
}

function showTask(){
    ul.innerHTML= localStorage.getItem("data");
}

showTask();

// let delBtns = document.querySelectorAll('.delete')

// for(delBtn of delBtns){
//     delBtn.addEventListener('click',()=>{
//         const par = delBtn.parentElement;
//         par.remove();
//     })
// }