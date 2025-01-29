import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@InputType() // Necesario para graphQL
export class CreateProductDto {
  @Field() // Necesario para graphQL
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field() // Necesario para graphQL
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field() // Necesario para graphQL
  @IsNotEmpty()
  @IsString()
  description: string;
}
