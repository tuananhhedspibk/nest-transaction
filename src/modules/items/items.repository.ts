import { Inject, Injectable, Scope } from '@nestjs/common';
import { BaseRepository } from '../../common/base.repository';
import { DataSource } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './items.entity';

@Injectable({ scope: Scope.REQUEST })
export class ItemsRepository extends BaseRepository {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async createItems(orderId: number, data: CreateItemDto[]) {
    const items = data.map((item) => ({
      order: { id: orderId },
      product: { id: item.productId },
      quantity: item.quantity,
    }));

    await this.getRepository(Item).insert(items);
  }
}
