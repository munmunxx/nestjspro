import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';
import { Airlines } from './entities/airline.entity';

@Injectable()
export class AirlinesService {
constructor ( @InjectRepository(Airlines) private    airlinesRepository:Repository<Airlines>  ) {}




  create(createAirlineDto: CreateAirlineDto) {
    return 'This action adds a new airline';
  }

  findAll() {
    return this.airlinesRepository.find();
  }

  findOne(id: number) {
     return this.airlinesRepository.findOneBy({id});
          
  }

  async update(id: number, updateAirlineDto: UpdateAirlineDto) {
  const updateairline = await this.findOne(id)

  updateairline.name = updateAirlineDto.name
   updateairline.commission = updateAirlineDto.commission

   const newupdateairline = await this.airlinesRepository.save(updateairline)

   return newupdateairline;



    
  }

  remove(id: number) {
    return this.airlinesRepository.delete(id);
  }
}
