import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private repository: ProductsRepository) {}

  async getAll() {
    return this.repository.getAll();
  }
}
