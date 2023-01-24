import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { Airports } from './entities/airport.entity';

@Injectable()
export class AirportService 
{constructor( @InjectRepository(Airports) private airportRepository: Repository<Airports>) {}

  create(createAirportDto: CreateAirportDto) {
    return 'This action adds a new airport';
  }

  findAll() {
    return this.airportRepository.find() ;
  }

  findOne(id: number) {
    return this.airportRepository.findOneBy({id});
          
  }

  async update(id: number,updateAirportDto: UpdateAirportDto ) { 
    const upddateair = await this.findOne(id)

    upddateair.city =updateAirportDto.city
    upddateair.cityCode =updateAirportDto.cityCode

    const newupdateair = await this.airportRepository.save(upddateair)
    return newupdateair;  ;
  }

  remove(id: number) {
    return this.airportRepository.delete({id});
  }
}
