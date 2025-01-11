import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany();

    const admin = await prisma.user.create({
        data: {
            username: 'admin',
            password: await bcrypt.hash('admin', 12),
            role: 'admin',
        },
    });

    const john = await prisma.user.create({
        data: {
            username: 'John',
            password: await bcrypt.hash('john', 12),
            role: 'user',
        },
    });

    const jane = await prisma.user.create({
        data: {
            username: 'Jane',
            password: await bcrypt.hash('jane', 12),
            role: 'user',
        },
    });

    const jack = await prisma.user.create({
        data: {
            username: 'Jack',
            password: await bcrypt.hash('jack', 12),
            role: 'user',
        },
    });

    const joe = await prisma.user.create({
        data: {
            username: 'Joe',
            password: await bcrypt.hash('joe', 12),
            role: 'user',
        },
    });
};

(async () => {
    try {
        await main();
        await prisma.$disconnect();
    } catch (error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    }
})();
