export const CPFValidation = (cpf: string) => {
  const cpfRegex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;
  return cpfRegex.test(cpf);
}