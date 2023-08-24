import { PrismaClient } from '@prisma/client';

import userServices from '../src/aaa/users.service';

const prisma = new PrismaClient();

describe('User Services', () => {
  let createdUserId: number;

  afterEach(async () => {
    if (createdUserId) {
      await prisma.user.delete({
        where: { id: createdUserId },
      });
    }
  });

  it('should create a user in the database', async () => {
    const name = 'John Doe';
    const email = 'john@example.com';
    const cpf = '123456789';
    const color = 'blue';

    const user = await userServices.createUserInDatabase(
      name,
      email,
      cpf,
      color,
    );
    createdUserId = user.id;

    const createdUser = await prisma.user.findUnique({
      where: { id: user.id },
    });

    expect(createdUser).toBeTruthy();
    expect(createdUser?.name).toBe(name);
    expect(createdUser?.email).toBe(email);
    expect(createdUser?.cpf).toBe(cpf);
    expect(createdUser?.color).toBe(color);
  });
});
