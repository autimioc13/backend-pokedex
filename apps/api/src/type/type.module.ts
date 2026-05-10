import { Module } from '@nestjs/common';
import { TypeModule } from '@app/type';
import { TypeController } from './type.controller';

@Module({
  imports: [TypeModule],
  controllers: [TypeController],
})
export class TypeApiModule {}
