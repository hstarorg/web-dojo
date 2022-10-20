export class BizError {
  status: number;
  hasError: boolean;
  statck: Error | string;
  message: string;
  constructor(err: Error | string) {
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
