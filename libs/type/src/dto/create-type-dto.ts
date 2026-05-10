import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateTypeDto {
  @ApiProperty({ example: 'Fire' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: '#F08030' })
  @IsString()
  @IsOptional()
  color?: string;
}
