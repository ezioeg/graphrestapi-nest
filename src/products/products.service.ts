import {
  Injectable,
  Inject,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { Pool } from 'pg'; // Importamos el Pool de postgreSQL
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/product.model';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('DATABASE_POOL') private readonly dbPool: Pool, // Inyectamos el Pool de conexiones
  ) {}

  /**
   * Crea un nuevo producto.
   * @param createProductDto El DTO que contiene los datos del producto.
   * @returns El producto creado.
   */
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { name, price, description } = createProductDto;

    // Validar si ya existe un producto con el mismo nombre
    const productExists = await this.dbPool.query(
      'SELECT * FROM products WHERE name = $1',
      [name],
    );
    if (productExists.rows.length > 0) {
      throw new ConflictException(
        `El producto con el nombre "${name}" ya existe.`,
      );
    }

    // Crear el producto en la base de datos
    const query =
      'INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *';
    const result = await this.dbPool.query(query, [name, price, description]);

    return result.rows[0]; // Retornamos el producto insertado
  }

  /**
   * Obtiene todos los productos.
   * @returns Lista de productos.
   */
  async findAll(): Promise<Product[]> {
    const query = 'SELECT * FROM products';
    const result = await this.dbPool.query(query);
    return result.rows; // Retornamos todos los productos
  }

  /**
   * Obtiene un producto por su ID.
   * @param id ID del producto.
   * @returns El producto encontrado.
   */
  async findOne(id: string): Promise<Product> {
    const query = 'SELECT * FROM products WHERE id = $1';
    const result = await this.dbPool.query(query, [id]);
    if (result.rows.length === 0) {
      throw new NotFoundException(`Producto con ID "${id}" no encontrado.`);
    }
    return result.rows[0]; // Retornamos el producto con el ID dado
  }

  /**
   * Actualiza un producto por su ID.
   * @param id ID del producto.
   * @param updateProductDto DTO con los datos actualizados.
   * @returns El producto actualizado.
   */
  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const { name, price, description } = updateProductDto;

    // Verificar si el producto existe
    const product = await this.findOne(id); // Usamos findOne para verificar si existe el producto

    // Verificar si ya existe otro producto con el mismo nombre (si se está cambiando el nombre)
    if (name && name !== product.name) {
      const productExists = await this.dbPool.query(
        'SELECT * FROM products WHERE name = $1',
        [name],
      );
      if (productExists.rows.length > 0) {
        throw new ConflictException(
          `El producto con el nombre "${name}" ya existe.`,
        );
      }
    }

    // Actualizar el producto
    const query =
      'UPDATE products SET name = $1, price = $2, description= $3 WHERE id = $4 RETURNING *';
    const result = await this.dbPool.query(query, [
      name,
      price,
      description,
      id,
    ]);

    return result.rows[0]; // Retornamos el producto actualizado
  }

  /**
   * Elimina un producto por su ID.
   * @param id ID del producto.
   * @returns El producto eliminado.
   */
  async remove(id: string): Promise<Product> {
    const query = 'DELETE FROM products WHERE id = $1 RETURNING *';
    const result = await this.dbPool.query(query, [id]);
    if (result.rows.length === 0) {
      throw new NotFoundException(`Producto con ID "${id}" no encontrado.`);
    }
    return result.rows[0]; // Retornamos el producto eliminado
  }
}
