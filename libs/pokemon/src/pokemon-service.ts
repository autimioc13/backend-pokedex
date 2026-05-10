import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@app/database';
import { CreatePokemonDto } from './dto/create-pokemon-dto';
import { UpdatePokemonDto } from './dto/update-pokemon-dto';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePokemonDto) {
    return this.prisma.pokemon.create({
      data: dto,
      include: { types: { include: { type: true } }, abilities: { include: { ability: true } } },
    });
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.prisma.pokemon.findMany({
        skip,
        take: limit,
        orderBy: { pokedexNumber: 'asc' },
        include: { types: { include: { type: true } } },
      }),
      this.prisma.pokemon.count(),
    ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findOne(id: number) {
    const pokemon = await this.prisma.pokemon.findUnique({
      where: { id },
      include: {
        types: { include: { type: true } },
        abilities: { include: { ability: true } },
        stats: { include: { stat: true } },
      },
    });
    if (!pokemon) throw new NotFoundException(`Pokémon with id ${id} not found`);
    return pokemon;
  }

  async findByPokedexNumber(pokedexNumber: number) {
    const pokemon = await this.prisma.pokemon.findUnique({
      where: { pokedexNumber },
      include: {
        types: { include: { type: true } },
        abilities: { include: { ability: true } },
        stats: { include: { stat: true } },
      },
    });
    if (!pokemon) throw new NotFoundException(`Pokémon #${pokedexNumber} not found`);
    return pokemon;
  }

  async update(id: number, dto: UpdatePokemonDto) {
    await this.findOne(id);
    return this.prisma.pokemon.update({
      where: { id },
      data: dto,
      include: { types: { include: { type: true } } },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pokemon.delete({ where: { id } });
  }
}
