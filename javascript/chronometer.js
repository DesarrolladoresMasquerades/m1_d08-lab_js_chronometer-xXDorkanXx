class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {

    const startInterval = setInterval(() => {
      this.currentTime++;
      if(callback) callback();
    }, 1 * 1000);

    this.intervalId = startInterval;
  }

  getMinutes() {
    return parseInt(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {

    const valueString = value.toString()

    if(valueString.length === 1) return "0" + valueString;
    else return valueString;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minStr = this.computeTwoDigitNumber(this.getMinutes());
    const secStr = this.computeTwoDigitNumber(this.getSeconds());
    return minStr + ":" + secStr;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
