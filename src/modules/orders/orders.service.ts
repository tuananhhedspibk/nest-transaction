import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { OrdersRepository } from './orders.repository';

import { ItemsService } from '../items/items.service';
import { CreateItemDto } from '../items/dto/create-item.dto';

@Injectable()
export class OrdersService {
  constructor(
    private ordersRepository: OrdersRepository,
    private itemService: ItemsService,
  ) {}

  async getAll() {
    return this.ordersRepository.getAll();
  }

  async createOrder(items: CreateItemDto[]) {
    const orderNo = `ORD_${randomUUID()}`;
    const order = await this.ordersRepository.createOrder(orderNo);
    await this.itemService.createItems(order.id, items);

    return order;
  }
}
