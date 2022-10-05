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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const min =  chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const arr = min.split('');
  minDecElement.innerHTML = arr[0];
  minUniElement.innerHTML = arr[1];
}

function printSeconds() {
  const sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  const arr = sec.split('');
  secDecElement.innerHTML = arr[0];
  secUniElement.innerHTML = arr[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splitsElement.innerHTML += `<li class="list-item">${chronometer.split()}</li>`
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerHTML = "STOP"
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
  btnRightElement.innerHTML = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerHTML = "START"
}

function setResetBtn() {
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
  btnRightElement.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  //comprobamos si tiene la clase stop
  if(btnLeftElement.classList.value.split(' ').includes('stop')){
    setStartBtn();
    setResetBtn();
    chronometer.stop();
    return;
  }
  setStopBtn();
  setSplitBtn();
  chronometer.start(printTime);

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnLeftElement.classList.value.split(' ').includes('reset')){
    chronometer.reset();
    printTime();
    return;
  }
  chronometer.split();
});
