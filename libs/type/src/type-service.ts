import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@app/database';
import { CreateTypeDto } from './dto/create-type-dto';
import { UpdateTypeDto } from './dto/update-type-dto';

@Injectable()
export class TypeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTypeDto) {
    return this.prisma.type.create({ data: dto });
  }

  async findAll() {
    return this.prisma.type.findMany({ orderBy: { name: 'asc' } });
  }

  async findOne(id: number) {
    const type = await this.prisma.type.findUnique({
      where: { id },
      include: { pokemons: { include: { pokemon: true } } },
    });
    if (!type) throw new NotFoundException(`Type with id ${id} not found`);
    return type;
  }

  async update(id: number, dto: UpdateTypeDto) {
    await this.findOne(id);
    return this.prisma.type.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.type.delete({ where: { id } });
  }
}
