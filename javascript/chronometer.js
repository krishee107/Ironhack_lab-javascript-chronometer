class Chronometer {
  currentTime;
  intervalId;

  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId= setInterval( () =>{
      this.currentTime++;
      if(callback) callback()
    },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    //PadStart es una funcion para strings que
    //Completa con el 0 hasta llegar a 2 caracteres (lo que hemos indicado)
    return value.toString().padStart(2, '0')
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutos = this.getMinutes();
    const segundos = this.getSeconds();

    return `${this.computeTwoDigitNumber(minutos)}:${this.computeTwoDigitNumber(segundos)}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
