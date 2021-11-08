const bigText = document.querySelector('.textArea-big') as HTMLDivElement
const smallText = document.querySelector('.textArea-small')
const blinkBar = document.querySelector('.bar')

let enteredValue1 = ''
let enteredValue2 = ''
let catchSymbol = ''

function getNumbers(e){
   enteredValue1 += e
   bigText.innerHTML += e
   if(enteredValue1.length > 14 ) {
      bigText.style.fontSize = '24px'
   }  if(enteredValue1.length > 20){
      smallText.innerHTML =''
      enteredValue1 = ''
      enteredValue2 = ''
      alert('Número de caracteries excedido!')
      bigText.innerHTML = ''
      bigText.style.fontSize = '35px'
   }
     blink()
   } 


function account(e){
      if(catchSymbol !== ''){
            enteredValue2 = bigText.innerHTML
            bigText.innerHTML = ` ${enteredValue2}  ${e} `
            catchSymbol += e
         
      } else if(catchSymbol.length === 0){
         enteredValue2 = enteredValue1
         bigText.innerHTML = `${enteredValue2} ${e} `
         enteredValue1 = ''
         catchSymbol = e
      }
      
}
function calculate(){
      smallText.innerHTML = bigText.innerHTML
      let r = eval(bigText.innerHTML.toString())
      bigText.innerHTML = r
      enteredValue1 = r
      catchSymbol = ''
   }

function clean(w: string){
   if(w == 'clear'){
      bigText.innerHTML = ''
      smallText.innerHTML =''
      enteredValue1 = ''
   } else if(w == 'CE'){
      let del = enteredValue1.slice(-1)
      bigText.innerHTML = enteredValue1.replace(del, '')
      enteredValue1 = bigText.innerHTML
   }  blink()
}
function blink(){
   if(bigText.innerHTML == ''){
      blinkBar.classList.remove('show')
   } else {
      blinkBar.classList.add('show')
   }
}


