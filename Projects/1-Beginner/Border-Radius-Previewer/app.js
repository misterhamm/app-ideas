// Lots o' stuff to grab

// Alllll the inputs
const basicInputs = document.querySelectorAll('.basic-input');
const advInputs = document.querySelectorAll('.advanced-input');

// Result stuff
const radiusBox = document.getElementById('radius-box');
const cssOutput = document.getElementById('css-output');

// Advanced mode items
const showAdvBtn = document.getElementById('show-adv');
const advContainer = document.getElementById('advanced');

basicInputs.forEach((input) => {
  input.oninput = function () {

    let basicBR = `${basicInputs[0].value || 0}px ${basicInputs[1].value || 0}px ${basicInputs[2].value || 0}px ${basicInputs[3].value || 0}px`;

    advInputs.forEach((input) => {
      input.value = 0;
    });
    radiusBox.style.borderRadius = basicBR;
    cssOutput.innerHTML = `border-radius: ${basicBR};`;
  }
});

advInputs.forEach((input) => {
  input.oninput = function () {

    let advBR = `${advInputs[0].value || 0}px ${advInputs[1].value || 0}px ${advInputs[2].value || 0}px ${advInputs[3].value || 0}px / ${advInputs[4].value || 0}px ${advInputs[5].value || 0}px ${advInputs[6].value || 0}px ${advInputs[7].value || 0}px`;
    console.log(advBR)
    basicInputs.forEach((input) => {
      input.value = 0;
    });

    radiusBox.style.borderRadius = advBR;
    cssOutput.innerHTML = `border-radius: ${advBR};`;
  }
});

showAdvBtn.onclick = function () {
  advContainer.style.display = 'block';
}