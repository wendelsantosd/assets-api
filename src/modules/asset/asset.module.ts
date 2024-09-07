import { Module } from '@nestjs/common';
import { AssetResolvers } from './asset.resolvers';
import { AssetService } from './asset.service';

@Module({
  providers: [AssetResolvers, AssetService],
  imports: [],
})
export class AssetModule {}
