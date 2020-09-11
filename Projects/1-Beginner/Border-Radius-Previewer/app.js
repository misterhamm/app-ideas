// Lots o' stuff to grab

// Alllll the inputs
const tl = document.getElementById('tl');
const tr = document.getElementById('tr');
const br = document.getElementById('br');
const bl = document.getElementById('bl');
const basicInputs = document.querySelectorAll('.basic-input');
const hrtl = document.getElementById('hrtl');
const hrtr = document.getElementById('hrtr');
const hrbr = document.getElementById('hrbr');
const hrbl = document.getElementById('hrbl');
const vrtl = document.getElementById('vrtl');
const vrtr = document.getElementById('vrtr');
const vrbr = document.getElementById('vrbr');
const vrbl = document.getElementById('vrbl');
const advInputs = document.querySelectorAll('.advanced-input');

// Radius box
const radiusBox = document.getElementById('radius-box');

basicInputs.forEach(el, function() {
  el.onchange = function() {
    console.log(el)
  }
})

basicInputs.addEventListener('change', function() {
  console.log('test')
});

const blah = function() {test.forEach(function(){
  console.log('asdfasdf')
})};