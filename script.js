window.sr = ScrollReveal({reset:true});


sr.reveal( '.containerprojetos',{  
    rotate:{x:100,y:00,z:710},
    duration:1500
} )

    sr.reveal( '.container',{  
        rotate:{x:100,y:00,z:710},
        duration:1500
    } )


sr.reveal( '.containerhabilidade',{  
    rotate:{x:100,y:00,z:710},
    duration:1500
} )

if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }

