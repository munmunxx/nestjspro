import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { Airports } from './entities/airport.entity';

@Injectable()
export class AirportService {
constructor( @InjectRepository(Airports) private airportRepository: Repository<Airports>  ) {

}

  create(createAirportDto: CreateAirportDto) {
    return 'This action adds a new airport';
  }

  findAll() {
    return this.airportRepository.find() ;
  }

  findOne(id): Promise<Airports> {
    return this.airportRepository.findOneBy({id});
          
    
  }

  update(id: number, updateAirportDto: UpdateAirportDto) {
    return `This action updates a #${id} airport`;
  }

  remove(id: number) {
    return `This action removes a #${id} airport`;
  }
}
