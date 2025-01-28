import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, IsNumber } from 'class-validator';

@InputType() // Necesario para GraphQL
export class UpdateProductDto {
  @Field({ nullable: true }) // Necesario para GraphQL
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true }) // Necesario para GraphQL
  @IsOptional()
  @IsNumber()
  price?: number;

  @Field({ nullable: true }) // Necesario para GraphQL
  @IsOptional()
  @IsString()
  description?: string;
}
