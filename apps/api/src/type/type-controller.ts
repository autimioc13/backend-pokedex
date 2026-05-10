import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TypeService, CreateTypeDto, UpdateTypeDto } from '@app/type';

@ApiTags('types')
@Controller('types')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Pokémon type' })
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typeService.create(createTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Pokémon types' })
  findAll() {
    return this.typeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a type by ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.typeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a type' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typeService.update(id, updateTypeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a type' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.typeService.remove(id);
  }
}
