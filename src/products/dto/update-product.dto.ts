import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, IsNumber } from 'class-validator';

@InputType() // Necesario para graphQL
export class UpdateProductDto {
  @Field({ nullable: true }) // Necesario para graphQL
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true }) // Necesario para graphQL
  @IsOptional()
  @IsNumber()
  price?: number;

  @Field({ nullable: true }) // Necesario para graphQL
  @IsOptional()
  @IsString()
  description?: string;
}
