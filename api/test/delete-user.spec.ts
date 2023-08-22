import userServices from '../src/services/users.service';

describe('User Services', () => {
  it('should delete a user from the database', async () => {
    const userIdToDelete = 1;

    const deletedUser = await userServices.deleteUserInDatabase(userIdToDelete);

    expect(deletedUser).toEqual(expect.objectContaining({ id: userIdToDelete }));
  });
});