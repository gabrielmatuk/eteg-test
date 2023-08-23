class CustomError extends Error {
  status: number;

  payload: object | undefined | string;

  constructor(options: {
    message: string;
    status: number;
    payload?: object | undefined | string;
  }) {
    super();
    this.message = options.message;
    this.status = options.status;
    this.payload = options.payload;
  }
}

export default CustomError;
