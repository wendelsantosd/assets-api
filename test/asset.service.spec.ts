import { Test, TestingModule } from '@nestjs/testing';
import { AssetService } from '../src/modules/asset/asset.service';
import { prismaMock, assetMock, assetsMock } from './db.mock';
import { CreateAssetDTO, UpdateAssetDTO } from '../src/graphql.schema';
import { PrismaClient } from '@prisma/client';

describe('AssetService Tests', () => {
  let assetService: AssetService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [
        AssetService,
        {
          provide: PrismaClient,
          useValue: prismaMock,
        },
      ],
    }).compile();

    assetService = moduleFixture.get<AssetService>(AssetService);
  });

  it('Should be defined', () => {
    expect(assetService).toBeDefined();
  });

  it('Should get an asset', async () => {
    const id = '246d65de-678e-4191-ad99-b9f82782f393';

    prismaMock.assets.findUnique.mockResolvedValue(assetMock);

    const result = await assetService.findOne(id);

    expect(result?.id).toEqual(id);
  });

  it('Should get assets', async () => {
    prismaMock.assets.findMany.mockResolvedValue(assetsMock);

    const result = await assetService.findAll();

    expect(result).toEqual(assetsMock);
  });

  it('Should create an asset', async () => {
    const data: CreateAssetDTO = {
      name: 'Mouse',
      value: 69.99,
      date: '2022-01-01T00:00:00.000Z',
    };

    prismaMock.assets.create.mockResolvedValue(assetMock);

    const result = await assetService.create(data);

    expect(result).toEqual('Asset created');
  });

  it('Should update an asset', async () => {
    const data: UpdateAssetDTO = {
      id: '246d65de-678e-4191-ad99-b9f82782f393',
      name: 'Teclado',
      value: 239.8,
    };

    prismaMock.assets.update.mockResolvedValue(assetMock);

    const result = await assetService.update(data);

    expect(result).toEqual('Asset updated');
  });

  it('Should delete an asset', async () => {
    const id = '246d65de-678e-4191-ad99-b9f82782f393';

    prismaMock.assets.delete.mockResolvedValue(null);

    const result = await assetService.delete(id);

    expect(result).toEqual('Asset deleted');
  });
});
