import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Agent } from './entities/agent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AgentService 
{constructor( @InjectRepository(Agent) private agentRepository: Repository<Agent>) {}

  create(createAirportDto: CreateAgentDto) {
    return 'This action adds a new agent';
  }

  findAll() {
    return this.agentRepository.find() ;
  }

  findOne(id: number) {
    return this.agentRepository.findOneBy({id});
          
  }

  async update(id: number,updateAgentDto: UpdateAgentDto ) { 
    const upddateagent = await this.findOne(id)

    upddateagent.name =updateAgentDto.name
    upddateagent.email =updateAgentDto.email

    const newupddateagent = await this.agentRepository.save(upddateagent)
    return newupddateagent;  ;
  }

  remove(id: number) {
    return this.agentRepository.delete({id});
  }
}
