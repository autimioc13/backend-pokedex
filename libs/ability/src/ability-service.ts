import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@app/database';
import { CreateAbilityDto } from './dto/create-ability-dto';
import { UpdateAbilityDto } from './dto/update-ability-dto';

@Injectable()
export class AbilityService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAbilityDto) {
    return this.prisma.ability.create({ data: dto });
  }

  async findAll() {
    return this.prisma.ability.findMany({ orderBy: { name: 'asc' } });
  }

  async findOne(id: number) {
    const ability = await this.prisma.ability.findUnique({
      where: { id },
      include: { pokemons: { include: { pokemon: true } } },
    });
    if (!ability) throw new NotFoundException(`Ability with id ${id} not found`);
    return ability;
  }

  async update(id: number, dto: UpdateAbilityDto) {
    await this.findOne(id);
    return this.prisma.ability.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.ability.delete({ where: { id } });
  }
}
