window.sr = ScrollReveal({reset:true});


sr.reveal( '.containerprojetos',{  
    rotate:{x:100,y:180,z:710},
    duration:2000
} )

    sr.reveal( '.container',{  
        rotate:{x:100,y:400,z:710},
        duration:9000
    } )


sr.reveal( '.containerhabilidade',{  
    rotate:{x:100,y:180,z:710},
    duration:2000
} )

if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }