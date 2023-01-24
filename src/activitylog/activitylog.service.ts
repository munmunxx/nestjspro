import { Injectable } from '@nestjs/common';
import { CreateActivitylogDto } from './dto/create-activitylog.dto';
import { UpdateActivitylogDto } from './dto/update-activitylog.dto';
import { Activitylog } from './entities/activitylog.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ActivitylogService 
{ constructor( @InjectRepository(Activitylog)   
  private activitylogRepository:Repository<Activitylog>) {}

    create(createAirportDto: CreateActivitylogDto) {
    return 'This action adds a new agent';
  }


  findAll() {
    return this.activitylogRepository.find();
  }

  findOne(id: number) {
    return this.activitylogRepository.findOneBy({id}) ;
  }

  async update(id: number, updateActivitylogDto: UpdateActivitylogDto) {
    const updateacivitylog = await this.findOne (id)


    updateacivitylog.ref= updateActivitylogDto.ref
    updateacivitylog.status= updateActivitylogDto.status

    const newupdateactivitylog = await this.activitylogRepository.save( updateacivitylog)
    return newupdateactivitylog;


  }

  remove(id: number) {
    return this.activitylogRepository.delete({id});
  }
}
