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
import { CreateItemDto } from '../items/dto/create-item.dto';

@Controller('orders')
export class OrdersController {
  constructor(private service: OrdersService) {}

  @Get('')
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
