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

// Set up vars for advanced border radii
let hrtl = '';
let hrtr = '';
let hrbr = '';
let hrbl = '';
let vrtl = '';
let vrtr = '';
let vrbr = '';
let vrbl = '';


// When one of the basic inputs is changed, grab them in order and apply the border radius accordingly
basicInputs.forEach((input) => {
    input.oninput = function() {
        // build the declaration string
        let basicBR = `${basicInputs[0].value || 0} ${basicInputs[1].value || 0} ${basicInputs[2].value || 0} ${basicInputs[3].value || 0}`;

        // zero out the advanced inputs
        advInputs.forEach((input) => {
            input.value = 0;
        });

        // set the style
        radiusBox.style.borderRadius = basicBR;

        // update the display box
        cssOutput.innerHTML = `border-radius: ${basicBR};`;
    }
});

// When one of the advanced inputs is changed, check the id, and set the right var property
// Dear god I'm sure there is a better way to do this and I'm staring right at it but can't see
advInputs.forEach((input) => {
    input.oninput = function() {
        // set border radius of correct one
        switch (input.id) {
          case 'hrtl':
              hrtl = input.value;
              break;
          case 'hrtr':
              hrtr = input.value;
              break;
          case 'hrbr':
              hrbr = input.value;
              break;
          case 'hrbl':
              hrbl = input.value;
              break;
          case 'vrtl':
              vrtl = input.value;
              break;
          case 'vrtr':
              vrtr = input.value;
              break;
          case 'vrbr':
              vrbr = input.value;
              break;
          case 'vrbl':
              vrbl = input.value;
              break;
          default:
              break;
      }

      //build our declaration string
      let advBR = `${hrtl || 0} ${hrtr || 0} ${hrbr || 0} ${hrbl || 0} / ${vrtl || 0} ${vrtr || 0} ${vrbr || 0} ${vrbl || 0}`;
      
      // zero out basic inputs
      basicInputs.forEach((input) => {
          input.value = 0;
      });

      // actually set the style
      radiusBox.style.borderRadius = advBR;
      // update the display box
      cssOutput.innerHTML = `border-radius: ${advBR};`;
  }
});

// show advanced inputs
showAdvBtn.onclick = function() {
    advContainer.style.display = 'block';
}