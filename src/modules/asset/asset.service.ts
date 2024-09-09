import { Injectable } from '@nestjs/common';
import { Asset, CreateAssetDTO, UpdateAssetDTO } from 'src/graphql.schema';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AssetService {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreateAssetDTO): Promise<Asset> {
    return await this.prisma.assets.create({
      data: { ...data },
    });
  }

  async update(data: UpdateAssetDTO): Promise<Asset> {
    return await this.prisma.assets.update({
      where: { id: data.id },
      data: {
        ...data,
      },
    });
  }

  async findAll(): Promise<Asset[]> {
    return await this.prisma.assets.findMany();
  }

  async findOne(id: string): Promise<Asset | null> {
    return await this.prisma.assets.findUnique({
      where: { id },
    });
  }

  async delete(id: string): Promise<string> {
    await this.prisma.assets.delete({
      where: { id },
    });

    return id;
  }
}
