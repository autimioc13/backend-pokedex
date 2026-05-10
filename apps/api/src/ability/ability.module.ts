import { Module } from '@nestjs/common';
import { AbilityModule } from '@app/ability';
import { AbilityController } from './ability.controller';

@Module({
  imports: [AbilityModule],
  controllers: [AbilityController],
})
export class AbilityApiModule {}
