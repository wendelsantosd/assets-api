import { Module } from '@nestjs/common';
import { AssetResolvers } from './asset.resolvers';
import { AssetService } from './asset.service';
import { PrismaModule } from 'src/shared/database/prisma.module';

@Module({
  providers: [AssetResolvers, AssetService],
  imports: [PrismaModule],
})
export class AssetModule {}
