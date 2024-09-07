import { Injectable, OnModuleInit } from '@nestjs/common';
import { Asset, CreateAssetDTO, UpdateAssetDTO } from 'src/graphql.schema';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AssetService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async create(data: CreateAssetDTO): Promise<string> {
    await this.assets.create({
      data: { ...data },
    });

    return 'Asset created';
  }

  async update(data: UpdateAssetDTO): Promise<string> {
    await this.assets.update({
      where: { id: data.id },
      data: {
        ...data,
      },
    });

    return 'Asset updated';
  }

  async findAll(): Promise<Asset[]> {
    return (await this.assets.findMany()) as any;
  }

  async findOne(id: string): Promise<Asset | null> {
    return (await this.assets.findUnique({
      where: { id: id },
    })) as any;
  }

  async delete(id: string): Promise<string> {
    await this.assets.delete({
      where: { id: id },
    });

    return 'Asset deleted';
  }
}
