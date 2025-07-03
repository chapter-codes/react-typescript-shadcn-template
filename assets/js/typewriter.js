'use strict'

export const typeWrite = (element)=>{
    const typedText= element.textContent.split('')
    element.textContent=''
    element.classList.replace('max-h-0', 'max-h-[500px]')
    console.log(typedText)

    let iterCount =0;
    const delay=100

// 
    
    const typeText = ()=>{
        
        if( iterCount < typedText.length ){
            const span = document.createElement('span')
            span.className = 'text-white animate-fade-in'
            span.innerText = typedText[iterCount]
            element.appendChild(span)
                
            iterCount++
        }else{
            clearInterval(typingInterval)
            console.log('interval cleared')
        }
    }

    const typingInterval = setInterval( typeText, delay)
}