const CPFValidation = (cpf: string) => {
  const cpfRegex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;
  return cpfRegex.test(cpf);
};

const emailValidation = (email: string) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

export default { CPFValidation, emailValidation };
