import prisma from "./../config/database";

async function findEmail(email: string) {
    return prisma.users.findFirst({
        where: {
            email: email,
        }
    })
};

async function createAccount(email: string, passwordHashed: string, completeName: string, cpf: string, phone: string) {
    return prisma.users.create({
        data: {
            email,
            password: passwordHashed,
            completeName,
            cpf,
            phone,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    })
};
async function createSessionUser(token: string, userId: number) {
    return prisma.session.create({
      data: {
        token,
        userId: userId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
  }

export const authenticateRepository = {
    findEmail,
    createAccount,
    createSessionUser
}