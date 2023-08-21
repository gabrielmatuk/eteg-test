import UserModel from '../models/users.model';

const listAllUsers = async () => {
  return UserModel.listAllUsers();
}

export default { listAllUsers };