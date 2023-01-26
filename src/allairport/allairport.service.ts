import { Injectable } from '@nestjs/common';
import { CreateAllairportDto } from './dto/create-allairport.dto';
import { UpdateAllairportDto } from './dto/update-allairport.dto';

@Injectable()
export class AllairportService {
  create(createAllairportDto: CreateAllairportDto) {
    return 'This action adds a new allairport';
  }

  findAll() {
    return `This action returns all allairport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} allairport`;
  }

  update(id: number, updateAllairportDto: UpdateAllairportDto) {
    return `This action updates a #${id} allairport`;
  }

  remove(id: number) {
    return `This action removes a #${id} allairport`;
  }
}
