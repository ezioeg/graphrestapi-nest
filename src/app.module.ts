import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module'; // Importamos el módulo de la base de datos

@Module({
  imports: [
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Configurar el driver de Apollo
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true, // Habilitar playground para pruebas
    }),
    DatabaseModule, // Agregamos el módulo de base de datos
  ],
})
export class AppModule {}
