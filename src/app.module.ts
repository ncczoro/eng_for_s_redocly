import { OrderController } from './controller/order.controller';
import { ProductController } from './controller/product.controller';
import { AuthController } from './controller/auth.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    OrderController,
    ProductController,
    AuthController,
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
