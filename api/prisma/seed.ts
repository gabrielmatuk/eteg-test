import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice Doe',
    email: 'Alice@test.com.br',
    cpf: '12345678301',
    color: '#000000',
  },
  {
    name: 'Mark Eleanor',
    email: 'mark_eleanor@gov.com',
    cpf: '12345678304',
    color: '#FAFAFA',
  },
  {
    name: 'Emmanuel da Silva',
    email: 'Emmanuelvlad2@gmail.com',
    cpf: '12345678305',
    color: '#FF0000',
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })