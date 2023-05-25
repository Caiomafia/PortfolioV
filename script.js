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




const btnModal  = document.querySelector('.btnModal')