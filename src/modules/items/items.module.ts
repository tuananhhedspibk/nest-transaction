import { Module } from '@nestjs/common';

import { ItemsService } from './items.service';
import { ItemsRepository } from './items.repository';

@Module({
  providers: [ItemsService, ItemsRepository],
  exports: [ItemsService],
})
export class ItemsModule {}
