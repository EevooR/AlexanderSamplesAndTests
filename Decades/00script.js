const mrBrightsideEx = document.querySelector('#MrBrightsideEx')
const keyCatEx = document.querySelector('#KeyCatEx')
const slenderManEx = document.querySelector('#SlenderManEx')
const webkinzEx = document.querySelector('#WebkinzEx')
const wOWEx = document.querySelector('#WOWEx')
const emoEx = document.querySelector('#EmoEx')
const oMEEx = document.querySelector('#OMEEx')
const rapEx = document.querySelector('#RapEx')
const twilightEx = document.querySelector('#TwilightEx')
const jEANSEx = document.querySelector('#JEANSEx')







function show(ex) {
  if(ex.style.height == '0px' || ex.style.height == null) {
    ex.style.height = 'auto'
    ex.style.overflow = 'visible'
  } else {
    ex.style.height = '0px'
    ex.style.overflow = 'hidden'
  }
}
