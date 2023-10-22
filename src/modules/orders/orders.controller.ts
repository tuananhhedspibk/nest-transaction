import {
  Body,
  Controller,
  Get,
  ParseArrayPipe,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { TransactionInterceptor } from '../../common/transaction.interceptor';

@Controller('orders')
export class OrdersController {
  constructor(private service: OrdersService) {}

  @Get('/index')
  async getAll() {
    return this.service.getAll();
  }

  @Post()
  @UseInterceptors(TransactionInterceptor)
  async createOrder(
    @Body(new ParseArrayPipe({ items: CreateItemDto })) data: CreateItemDto[],
  ) {
    return this.service.createOrder(data);
  }
}
