function Search(){
    let searchbar=document.querySelector('.search-bar')
    searchbar.classList.remove('d-none')
}
 

function Close(){
    let searchbar=document.querySelector('.search-bar')
    searchbar.classList.add('d-none')
}
let btn=document.getElementById('btn')
let list=document.getElementById('list')

list.style.display='none'
btn.addEventListener('click',(event)=>{
    if(list.style.display==='block'){
        list.style.display='none'
    }else{
        list.style.display='block'
    }
})