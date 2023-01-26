import { Module } from '@nestjs/common';
import { AllairlinesService } from './allairlines.service';
import { AllairlinesController } from './allairlines.controller';
import { Allairlines } from './entities/allairline.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
imports:[TypeOrmModule.forFeature([Allairlines])],

  controllers: [AllairlinesController],
  providers: [AllairlinesService]
})
export class AllairlinesModule {}
