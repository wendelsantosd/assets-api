import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AssetService } from './asset.service';
import { Asset, CreateAssetDTO, UpdateAssetDTO } from 'src/graphql.schema';

@Resolver('Asset')
export class AssetResolvers {
  constructor(private readonly assetService: AssetService) {}

  @Mutation('createAsset')
  async create(@Args('data') data: CreateAssetDTO): Promise<Asset> {
    return await this.assetService.create(data);
  }

  @Mutation('updateAsset')
  async update(@Args('data') data: UpdateAssetDTO): Promise<Asset> {
    return this.assetService.update(data);
  }

  @Query('assets')
  async assets(): Promise<Asset[]> {
    return this.assetService.findAll();
  }

  @Query('asset')
  async asset(@Args('id') id: string): Promise<Asset | null> {
    return this.assetService.findOne(id);
  }

  @Mutation('deleteAsset')
  async delete(@Args('id') id: string): Promise<string> {
    return this.assetService.delete(id);
  }
}
