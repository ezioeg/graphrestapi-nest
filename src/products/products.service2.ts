import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Producto A',
      price: 100,
      description: 'Este es el producto A',
    },
    {
      id: '2',
      name: 'Producto B',
      price: 200,
      description: 'Este es el producto B',
    },
    {
      id: '3',
      name: 'Producto c',
      price: 100,
      description: 'Este es el producto C',
    },
    {
      id: '4',
      name: 'Producto D',
      price: 200,
      description: 'Este es el producto D',
    },
  ];

  /**
   * Crea un nuevo producto.
   * Manejo de errores:
   * - Si el producto con el mismo nombre ya existe, lanza `ConflictException`.
   */
  create(createProductDto: CreateProductDto): Product {
    const productExists = this.products.some(
      (product) => product.name === createProductDto.name,
    );

    if (productExists) {
      throw new ConflictException(
        `El producto con el nombre "${createProductDto.name}" ya existe.`,
      );
    }

    const newProduct = { id: Date.now().toString(), ...createProductDto };
    this.products.push(newProduct);
    return newProduct;
  }

  /**
   * Obtiene todos los productos.
   * Manejo de errores:
   * - Si no hay productos, retorna un arreglo vacío (esto no se considera un error).
   */
  findAll(): Product[] {
    return this.products;
  }

  /**
   * Obtiene un producto por su ID.
   * Manejo de errores:
   * - Si el ID es inválido (por ejemplo, null, undefined, o vacío), lanza `BadRequestException`.
   * - Si el producto no existe, lanza `NotFoundException`.
   */
  findOne(id: string): Product {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Producto con ID "${id}" no encontrado.`);
    }
    return product;
  }

  /**
   * Actualiza un producto por su ID.
   * Manejo de errores:
   * - Si el ID es inválido, lanza `BadRequestException`.
   * - Si el producto no existe, lanza `NotFoundException`.
   * - Si el nuevo nombre ya existe en otro producto, lanza `ConflictException`.
   */
  update(id: string, updateProductDto: UpdateProductDto): Product {
    const product = this.findOne(id); // Esto ya maneja NotFoundException.

    if (updateProductDto.name) {
      const productExists = this.products.some(
        (p) => p.name === updateProductDto.name && p.id !== id,
      );

      if (productExists) {
        throw new ConflictException(
          `El producto con el nombre "${updateProductDto.name}" ya existe.`,
        );
      }
    }

    Object.assign(product, updateProductDto);
    return product;
  }

  /**
   * Elimina un producto por su ID.
   * Manejo de errores:
   * - Si el ID es inválido, lanza `BadRequestException`.
   * - Si el producto no existe, lanza `NotFoundException`.
   */
  remove(id: string): Product {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new NotFoundException(`Producto con ID "${id}" no encontrado.`);
    }

    const removedProduct = this.products[index]; // Guardar el producto eliminado
    this.products.splice(index, 1); // Eliminarlo de la lista

    return removedProduct; // Retornar el producto eliminado
  }
}
