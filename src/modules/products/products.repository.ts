import { Inject, Injectable, Scope } from '@nestjs/common';
import { BaseRepository } from '../../common/base.repository';
import { DataSource } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Product } from './products.entity';

@Injectable({ scope: Scope.REQUEST })
export class ProductsRepository extends BaseRepository {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async getAll() {
    return this.getRepository(Product).find();
  }
}
