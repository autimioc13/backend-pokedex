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
import { AbilityService, CreateAbilityDto, UpdateAbilityDto } from '@app/ability';

@ApiTags('abilities')
@Controller('abilities')
export class AbilityController {
  constructor(private readonly abilityService: AbilityService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ability' })
  create(@Body() createAbilityDto: CreateAbilityDto) {
    return this.abilityService.create(createAbilityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all abilities' })
  findAll() {
    return this.abilityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an ability by ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.abilityService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an ability' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAbilityDto: UpdateAbilityDto) {
    return this.abilityService.update(id, updateAbilityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an ability' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.abilityService.remove(id);
  }
}
