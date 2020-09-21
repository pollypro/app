export interface IHttpError {
  readonly name: string;
  readonly status: number;
  readonly message: string;
  toString: () => string;
}

export default class HttpError implements IHttpError {
  readonly name = 'HttpError';
  readonly status: number = 0;
  readonly message: string = '';

  constructor(props: { status: number; message?: string }) {
    this.status = props.status;
    if (props.message) {
      this.message = props.message;
    }
  }

  toString() {
    return [`${this.name}:`, this.status, this.message].filter(Boolean).join(' ');
  }
}
