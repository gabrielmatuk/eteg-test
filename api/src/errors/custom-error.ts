class CustomError extends Error {
  status: number;
  code: string | undefined;
  constructor(options: {
    code?: string;
    message: string;
    status: number;
  }) {
    super(
      options.message
    )
    this.code = options.code;
    this.status = options.status;
  }
}

export default CustomError;
