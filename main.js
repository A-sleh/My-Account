// ============================ start Header ===========================//

let allLinks = document.querySelectorAll('.nav li a');
let menuBtn = document.querySelector('.mean');
let menuSpans = document.querySelector('.mean').children;
let menuLayOut = document.querySelector('.layout');
let nav = document.querySelector('.nav');
let isOpen = false ;

allLinks.forEach(link => {
    link.onclick = (from) => {
        from.preventDefault();
        window.scrollTo({
            top : document.querySelector(`.${link.dataset.url}`).offsetTop - 50  , 
            behavior : 'smooth' ,
        })
        if(isOpen) {
            isOpen = false ;
            fixedNav() ;
        }
    }
})

let scrollBtn = document.querySelector('#sceollBtn') ;

window.onscroll = () => {
    if( window.scrollY >= 500 ) {
        scrollBtn.style.opacity = '1';
    } else {
        scrollBtn.style.opacity = '0';
    }
}

// open navpar in screen  phone
menuBtn.onclick = () => {
    isOpen = ( isOpen ? false :  true ) ;
    fixedNav() 
}

// fixed the navbar 
function fixedNav() {
    for( let i = 0 ; i < menuSpans.length ; ++ i ) {
        menuSpans[i].classList.toggle('open') ;
    }
    if( isOpen ) {
        menuLayOut.style.cssText = 'transform: translateX(0)'
        nav.style.cssText = 'transform: translateX(0)'
    }else {
        menuLayOut.style.cssText = 'transform: translateX(150%)'
        nav.style.cssText = 'transform: translateX(150%)'
    }
}

scrollBtn.onclick = () => {
    window.scrollTo({
        top : 0 ,
        behavior : 'smooth' ,
    })
}
// ============================ end Header ===========================//

// ============================ start Landing ===========================//
let str = document.querySelector('.landing .info h1 #text') ;
writerWorld(str,300);
function writerWorld(srcCode,speed) {

    let innerName = srcCode.textContent ;
    let index = 0 , test = true;
    srcCode.innerHTML = innerName[index++] ;

    let write = setInterval(()=>{
        if( index < innerName.length && test ) {
            srcCode.innerHTML += innerName[index++] ;
        }else {
            let index_2 = 0 ;
            srcCode.innerHTML = innerName[index_2++];
            for( ; index_2 < index ; index_2 ++ ) {
                srcCode.innerHTML += innerName[index_2];
            }
            index--; test = false ;
            if(index == -1 ) {
                test = true ;
                index = 1 ;
            }
        }
    },speed)
}
// ============================ end Landing ===========================//

// ============================ start Skills ==========================//

let allBox = [...document.querySelectorAll('.skills .container .box') ] ,
    mainContainer = document.querySelector('.skills .container') ;


// ============================ end Skills ==========================//