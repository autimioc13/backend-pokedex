import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const types = [
    { name: 'Normal', color: '#A8A878' },
    { name: 'Fire', color: '#F08030' },
    { name: 'Water', color: '#6890F0' },
    { name: 'Electric', color: '#F8D030' },
    { name: 'Grass', color: '#78C850' },
    { name: 'Ice', color: '#98D8D8' },
    { name: 'Fighting', color: '#C03028' },
    { name: 'Poison', color: '#A040A0' },
    { name: 'Ground', color: '#E0C068' },
    { name: 'Flying', color: '#A890F0' },
    { name: 'Psychic', color: '#F85888' },
    { name: 'Bug', color: '#A8B820' },
    { name: 'Rock', color: '#B8A038' },
    { name: 'Ghost', color: '#705898' },
    { name: 'Dragon', color: '#7038F8' },
    { name: 'Dark', color: '#705848' },
    { name: 'Steel', color: '#B8B8D0' },
    { name: 'Fairy', color: '#EE99AC' },
  ];

  for (const type of types) {
    await prisma.type.upsert({
      where: { name: type.name },
      update: {},
      create: type,
    });
  }

  console.log('Seed completed: 18 Pokémon types inserted.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
