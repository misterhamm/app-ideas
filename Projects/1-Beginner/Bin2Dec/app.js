// Grab the elements we'll need
const submitBtn = document.getElementById('submitBtn');
const resultElem = document.getElementById('decVal');

// Set up event listener
submitBtn.onclick = function () {
  // Get binary input value
  let inputVal = document.getElementById('binaryInput').value;
  
  // Run conversion
  bin2dec(inputVal);
};

// Convert binary to decimal
function bin2dec(binVal) {
  const nonBinInts = ['2', '3', '4', '5', '6', '7', '8', '9'];

  // Make sure someone didn't sneak something that isn't a number in
  if (isNaN(binVal)) {
    resultElem.innerHTML = "that's not a number, chump";
  }
  // Make sure there are only 1's and 0's
  else if (contains(binVal, nonBinInts)) {
    resultElem.innerHTML = "yeah, that isn't binary. try again with only 1's and 0's";
  }
  else {
    resultElem.innerHTML = parseInt(binVal, 2);
  } 
}

// Check if a string does not contain a set of values
function contains(target, pattern){
  var value = false;
  pattern.forEach(function(i){
    if (target.includes(i)) {
      value = true;
    }
  });
  return value
}