import { Inject, Injectable, Scope } from '@nestjs/common';
import { BaseRepository } from '../../common/base.repository';
import { DataSource } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Order } from './orders.entity';

@Injectable({ scope: Scope.REQUEST })
export class OrdersRepository extends BaseRepository {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async getAll() {
    return this.getRepository(Order).find({
      relations: {
        items: {
          product: true,
        },
      },
    });
  }

  async createOrder(orderNo: string) {
    const ordersRepository = this.getRepository(Order);

    const order = ordersRepository.create({
      date: new Date(),
      orderNo,
    });

    await ordersRepository.insert(order);

    return order;
  }
}
