import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  const assets = [
    {
      id: uuidv4(),
      name: 'Mouse',
      value: 69.99,
      date: '2024-09-05',
    },
    {
      id: uuidv4(),
      name: 'Teclado',
      value: 89.99,
      date: '2024-09-05',
    },
    {
      id: uuidv4(),
      name: 'Monitor',
      value: 249.99,
      date: '2024-09-05',
    },
    {
      id: uuidv4(),
      name: 'Headset',
      value: 99.99,
      date: '2024-09-05',
    },
    {
      id: uuidv4(),
      name: 'Webcam',
      value: 59.99,
      date: '2024-09-05',
    },
  ];

  for (const asset of assets) {
    await prisma.assets.create({
      data: asset,
    });
  }

  console.log('Seed data inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
