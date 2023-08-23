import userServices from '../src/services/users.service';

describe('User Services', () => {
  it('should update a user in the database', async () => {
    const userIdToUpdate = 2;

    const updatedUserData = {
      name: 'User Test Updated',
      email: 'user-test-update@example.com',
      cpf: '123333333',
      color: '#KAKAKA',
    };

    const updatedUser = await userServices.updateUserInDatabase(
      userIdToUpdate,
      updatedUserData.name,
      updatedUserData.email,
      updatedUserData.cpf,
      updatedUserData.color,
    );

    expect(updatedUser).toEqual(
      expect.objectContaining({ id: userIdToUpdate }),
    );
    expect(updatedUser).toEqual(expect.objectContaining(updatedUserData));
  });
});
