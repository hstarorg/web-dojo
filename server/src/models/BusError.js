class BusError {
  constructor(err) {
    this.status = 200;
    this.hasError = true;
    this.statck = err;
    if (err instanceof Error) {
      this.message = err.message;
    } else if (typeof err === 'string') {
      this.message = err;
    } else {
      this.message = '';
    }
  }
}

module.exports = BusError;
