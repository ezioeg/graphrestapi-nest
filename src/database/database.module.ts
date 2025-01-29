import { Module } from '@nestjs/common';
import { Pool } from 'pg';

// Aquí estamos creando un provider para la base de datos postgreSQL
const dbProvider = {
  provide: 'DATABASE_POOL', // Esto es lo que vamos a inyectar en otros servicios
  useFactory: () => {
    return new Pool({
      host: 'localhost', // Dirección de tu base de datos
      port: 5432, // Puerto de PostgreSQL (puede variar)
      user: 'ezioeg', // Usuario de postgreSQL
      password: '1307', // Contraseña de postgreSQL
      database: 'graphrestapi_nest_db', // Nombre de la base de datos
    });
  },
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider], // Exportamos para usarlo en otros módulos
})
export class DatabaseModule {}
