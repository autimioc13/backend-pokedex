import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/database';
import { PokemonApiModule } from './pokemon/pokemon-module';
import { TypeApiModule } from './type/type-module';
import { AbilityApiModule } from './ability/ability-module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    PokemonApiModule,
    TypeApiModule,
    AbilityApiModule,
  ],
})
export class AppModule {}
