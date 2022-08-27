window.sr = ScrollReveal({reset:true});


sr.reveal('.containerprojetos' , { 
    rotate : {x:0 , y:80, z:0},
    duration:3500})

    sr.reveal('.container' , { 
        rotate : {x:0 , y:100, z:0},
        duration:2000})



sr.reveal( '.containerhabilidade',{  
    rotate:{x:100,y:180,z:710},
    duration:2000
} )

if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }