const togbtn = document.getElementById('toggle-skill') as HTMLButtonElement
const skl = document.getElementById("skills") as HTMLElement
togbtn.addEventListener ('click', ()=> {
    if(skl.style.display === 'none'){
        skl.style.display = 'block' 
    }
    else{
        skl.style.display = 'none'
    }
})

