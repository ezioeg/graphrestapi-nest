import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { ProductsController } from './products.controller';
import { DatabaseModule } from 'src/database/database.module'; // Importamos el módulo de la base de datos

@Module({
  imports: [DatabaseModule], // Importamos el DatabaseModule
  controllers: [ProductsController],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
