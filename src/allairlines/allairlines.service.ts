import { Injectable } from '@nestjs/common';
import { CreateAllairlineDto } from './dto/create-allairline.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateAllairlineDto } from './dto/update-allairline.dto';
import { Allairlines } from './entities/allairline.entity';

@Injectable()
export class AllairlinesService {

constructor ( @InjectRepository (Allairlines)   private    allairlinesRepository:Repository <Allairlines>   )    {}




  create(createAllairlineDto: CreateAllairlineDto) {
    return 'This action adds a new allairline';
  }

  findAll() {
    return this.allairlinesRepository.find() ;
  }

  findOne(id: number) {
    return this.allairlinesRepository.findOneBy({id});
  }
  


  async update(id: number, updateAllairlineDto: UpdateAllairlineDto) {
   const updateallair = await this.findOne(id)

   updateallair.code = updateAllairlineDto.code
   updateallair.name = updateAllairlineDto.name

   updateallair.name = updateAllairlineDto.name
  const newupdateallair = await this.allairlinesRepository.save(updateallair)
  return newupdateallair;
  
  
  
  
  }

  remove(id: number) {
    return this.allairlinesRepository.delete(id);
  }
}
