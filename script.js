window.sr = ScrollReveal({reset:true});


sr.reveal('.containerprojetos' , { 
    rotate : {x:0 , y:80, z:0},
    duration:5000})


sr.reveal( '.container',{  
    rotate:{x:100,y:0,z:10},
    duration:2000
} )

if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }