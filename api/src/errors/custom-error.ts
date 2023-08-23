class CustomError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
  }
}

export default CustomError;
