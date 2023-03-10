import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AllairlinesService } from './allairlines.service';
import { CreateAllairlineDto } from './dto/create-allairline.dto';
import { UpdateAllairlineDto } from './dto/update-allairline.dto';

@Controller('allairlines')
export class AllairlinesController {
  constructor(private readonly allairlinesService: AllairlinesService) {}

  @Post()
  create(@Body() createAllairlineDto: CreateAllairlineDto) {
    return this.allairlinesService.create(createAllairlineDto);
  }

  @Get('all')
  findAll() {
    return this.allairlinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.allairlinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAllairlineDto: UpdateAllairlineDto) {
    return this.allairlinesService.update(+id, updateAllairlineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.allairlinesService.remove(id);
  }
}
