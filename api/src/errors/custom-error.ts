class CustomError extends Error {
  status: number;

  constructor(options: {
    message: string;
    status: number;
  }) {
    super();
    this.message = options.message;
    this.status = options.status;
  }
}

export default CustomError;
