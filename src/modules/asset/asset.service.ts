import { Injectable, OnModuleInit } from '@nestjs/common';
import { Asset, CreateAssetDTO, UpdateAssetDTO } from 'src/graphql.schema';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AssetService implements OnModuleInit {
  constructor(private prisma: PrismaClient) {}
  async onModuleInit() {
    await this.prisma.$connect();
  }

  async create(data: CreateAssetDTO): Promise<string> {
    await this.prisma.assets.create({
      data: { ...data },
    });

    return 'Asset created';
  }

  async update(data: UpdateAssetDTO): Promise<string> {
    await this.prisma.assets.update({
      where: { id: data.id },
      data: {
        ...data,
      },
    });

    return 'Asset updated';
  }

  async findAll(): Promise<Asset[]> {
    return (await this.prisma.assets.findMany()) as any;
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

    return 'Asset deleted';
  }
}
