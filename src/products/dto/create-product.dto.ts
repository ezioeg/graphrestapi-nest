import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@InputType() // Necesario para GraphQL
export class CreateProductDto {
  @Field() // Necesario para GraphQL
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field() // Necesario para GraphQL
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field() // Necesario para GraphQL
  @IsNotEmpty()
  @IsString()
  description: string;
}
