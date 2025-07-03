import { typeWrite } from "./assets/js/typewriter.js";


// const typedText = document.getElementById('typed-text')
// typeWrite(typedText)

let interval;
window.addEventListener('DOMContentLoaded', async ()=>{
    const heroImg = document.getElementById('hero-img')
    interval = setInterval(()=>handleImgLoaded(heroImg), 100)


    const heroImgWrap = document.getElementById('hero-img-wrap')
    heroImgWrap.ontransitionend = handleTransitionEnd

})


function handleTransitionEnd (){
    console.log('end')
    const typedText = document.getElementById('typed-text')
    typeWrite(typedText)
}

function handleImgLoaded(imageElement){
    console.log('run')
    imageElement.onload = toggleanimationClass
    const loaded = imageElement.onload()
    console.log(loaded)
    if(loaded) return;
    console.log('here')
    if(imageElement.complete){
      toggleanimationClass()
    }else{
        console.log('not yet')
    }
}


function toggleanimationClass(){
    document.body.classList.replace('no-animate', 'animate')
    document.getElementById('hero-img-wrap').classList.remove('animate-bounce')
    clearInterval(interval)
    return true
}