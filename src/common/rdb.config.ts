import { config as dotenvConfig } from 'dotenv';

import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource, DataSourceOptions } from 'typeorm';

import { Item } from '../modules/items/items.entity';
import { Product } from '../modules/products/products.entity';
import { Order } from '../modules/orders/orders.entity';

dotenvConfig({ path: '.env' });

export const config = {
  type: 'mysql',
  host: `${process.env.DATABASE_HOST}`,
  port: `${process.env.DATABASE_PORT}`,
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: [Item, Product, Order],
  migrations: ['./src/common/migrations/*.ts'],
  autoLoadEntities: true,
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const connectionSource = new DataSource(config as DataSourceOptions);
