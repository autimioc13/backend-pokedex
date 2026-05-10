import { Module } from '@nestjs/common';
import { PokemonModule } from '@app/pokemon';
import { PokemonController } from './pokemon.controller';

@Module({
  imports: [PokemonModule],
  controllers: [PokemonController],
})
export class PokemonApiModule {}
