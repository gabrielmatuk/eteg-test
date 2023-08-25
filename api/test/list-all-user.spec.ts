import userServices from '../src/services/users.service';

describe('User Services', () => {
  it('should list all users from the database', async () => {
    const users = await userServices.findUsers();

    expect(users).toHaveLength(2);
  });
});
