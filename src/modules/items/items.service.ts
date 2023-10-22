import { Injectable } from '@nestjs/common';

import { ItemsRepository } from './items.repository';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(private repository: ItemsRepository) {}

  async createItems(orderId: number, items: CreateItemDto[]) {
    return this.repository.createItems(orderId, items);
  }
}
