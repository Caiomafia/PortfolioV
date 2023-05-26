const openModal = () => {

    const modal = document.querySelector('.modal');
    const actualmodal = modal.style.display
    if(actualmodal == 'block'){
        modal.style.display = 'none'
    }  
     else{
        modal.style.display = 'block'
     }


}







window.onclick = function(event){
    const modal = document.querySelector('.modal');
    if(event.target == modal){
        openModal()
    }
}

const closemodal =  () => {
    document.querySelector('.modal').style.display = "none"
}


