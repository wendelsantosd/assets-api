import { PrismaClient, assets } from '@prisma/client';
import { DeepMockProxy, mockDeep, mockReset } from 'jest-mock-extended';
import prisma from '../src/shared/database/prisma';
jest.mock('../src/shared/database/prisma', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
  mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

export const assetMock: assets = {
  id: '246d65de-678e-4191-ad99-b9f82782f393',
  name: 'Mouse',
  value: 69.99,
  date: '2024-09-05',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const assetsMock: assets[] = [
  {
    id: '246d65de-678e-4191-ad99-b9f82782f393',
    name: 'Mouse',
    value: 69.99,
    date: '2024-09-05',
    createdAt: new Date('2024-09-05'),
    updatedAt: new Date('2024-09-05'),
  },
  {
    id: '333d65de-678e-4191-ad99-b9f82782f333',
    name: 'Teclado',
    value: 230.9,
    date: '2024-09-05',
    createdAt: new Date('2024-09-05'),
    updatedAt: new Date('2024-09-05'),
  },
];
