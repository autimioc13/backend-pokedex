import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PokemonService, CreatePokemonDto, UpdatePokemonDto } from '@app/pokemon';

@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Pokémon' })
  @ApiResponse({ status: 201, description: 'Pokémon created successfully' })
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Pokémon' })
  findAll(@Query('page') page = '1', @Query('limit') limit = '20') {
    return this.pokemonService.findAll(+page, +limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Pokémon by ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonService.findOne(id);
  }

  @Get('number/:pokedexNumber')
  @ApiOperation({ summary: 'Get a Pokémon by Pokédex number' })
  findByPokedexNumber(@Param('pokedexNumber', ParseIntPipe) pokedexNumber: number) {
    return this.pokemonService.findByPokedexNumber(pokedexNumber);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a Pokémon' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Pokémon' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonService.remove(id);
  }
}
