const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];

}

// ==> BONUS
function printMilliseconds() {
  const miliSeconds = chronometer.getMiliSecondsStr();
  milDecElement.innerText = miliSeconds[0];
  milUniElement.innerText = miliSeconds[1];
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  btnLeftElement.classList.toggle("stop");
  btnLeftElement.classList.toggle("start");

  btnRightElement.classList.toggle("split");
  btnRightElement.classList.toggle("reset");

  if(btnLeftElement.classList.contains("stop")){

    btnLeftElement.innerText = "STOP";
    btnRightElement.innerText = "SPLIT";
    chronometer.start(printTime);

  } else if(btnLeftElement.classList.contains("start")){
    
    btnLeftElement.innerText = "START";
    btnRightElement.innerText = "RESET"
    chronometer.stop()
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains("split")){
    const newSplit = document.createElement("li");
    newSplit.innerText = chronometer.split();
    splitsElement.appendChild(newSplit);
  } else if(btnRightElement.classList.contains("reset")){
    minDecElement.innerText = 0;
    minUniElement.innerText = 0;
    secDecElement.innerText = 0;
    secUniElement.innerText = 0;
    milDecElement.innerText = 0;
    milUniElement.innerText = 0;
    while(splitsElement.firstChild){
      splitsElement.removeChild(splitsElement.lastChild);
    };
  }
});
