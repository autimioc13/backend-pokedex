import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateAbilityDto {
  @ApiProperty({ example: 'Overgrow' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'Powers up Grass-type moves when the Pokémon is in trouble.' })
  @IsString()
  @IsOptional()
  description?: string;
}
