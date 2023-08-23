class CustomError extends Error {
  status: number;
  code: string | undefined;
  constructor(options: {
    code?: string;
    message: string;
    status: number;
  }) {
    super();
    this.code = options.message;
    this.message = options.message;
    this.status = options.status;
  }
}

export default CustomError;
