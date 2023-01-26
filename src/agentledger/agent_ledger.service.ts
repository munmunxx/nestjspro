// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm/dist';
// import { Repository } from 'typeorm';
// import { CreateAgent_ledgerDto } from './dto/create-agent_ledger.dto';
// import { UpdateAgentledgerDto } from './dto/update-agentledger.dto';
// import { Agent_ledger } from './entities/agent_ledger.entity';

// @Injectable()
// export class Agent_ledgerService {
// constructor (@InjectRepository(Agent_ledger) private agentledgerRepository:Repository<Agent_ledger> ){}
//   create(createAgentledgerDto: CreateAgent_ledgerDto) {
//     return 'This action adds a new agentledger';
//   }

//   findAll() {
//     return this.agentledgerRepository.find();
//   }

//   findOne(id: number) {
//     return this.agentledgerRepository.findOneBy({id});
//   }

//  async update(id: number, updateAgentledgerDto: UpdateAgentledgerDto) {
//   const updateagentled = await this.findOne(id)

//   updateagentled.agentId = updateAgentledgerDto.agentId
//     updateagentled.staffId = updateAgentledgerDto.staffId


//     const newupdateagentled = await this.agentledgerRepository.save(updateagentled)
//     return newupdateagentled;


 
//   }

//   remove(id: number) {
//     return `This action removes a #${id} agentledger`;
//   }
// }
