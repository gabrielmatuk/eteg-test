import UserModel from "@models/users.model"

const listAllUsers = async () => {
  return UserModel.listAllUsers();
}

const createUserInDatabase = async (name: string, email: string, cpf: string, color: string, observations?: string) => {
  return UserModel.createUserInDatabase(name, email, cpf, color, observations);
}

const updateUserInDatabase = async (id: number, name: string, email: string, cpf: string, color: string, observations?: string) => {
  return UserModel.updateUserInDatabase(id, name, email, cpf, color, observations);
}

const deleteUserInDatabase = async (id: number) => {
  return UserModel.deleteUserInDatabase(id);
}
export default { listAllUsers, createUserInDatabase, updateUserInDatabase, deleteUserInDatabase };