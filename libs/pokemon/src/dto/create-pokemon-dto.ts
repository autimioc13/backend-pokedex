import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt, IsNumber, IsBoolean, IsOptional, IsUrl, Min } from 'class-validator';

export class CreatePokemonDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  pokedexNumber: number;

  @ApiProperty({ example: 'Bulbasaur' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'A strange seed was planted on its back at birth.' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 0.7 })
  @IsNumber()
  height: number;

  @ApiProperty({ example: 6.9 })
  @IsNumber()
  weight: number;

  @ApiPropertyOptional({ example: 64 })
  @IsInt()
  @IsOptional()
  baseExperience?: number;

  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  spriteUrl?: string;

  @ApiPropertyOptional({ default: false })
  @IsBoolean()
  @IsOptional()
  isLegendary?: boolean;

  @ApiPropertyOptional({ default: false })
  @IsBoolean()
  @IsOptional()
  isMythical?: boolean;
}
