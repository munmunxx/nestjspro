// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { AgentledgerService } from './agent_ledger.service';
// import { CreateAgent_ledgerDto } from './dto/create-agent_ledger.dto';
// import { UpdateAgentledgerDto } from './dto/update-agentledger.dto';

// @Controller('agentledger')
// export class AgentledgerController {
//   constructor(private readonly agentledgerService: AgentledgerService) {}

//   @Post()
//   create(@Body() createAgentledgerDto: CreateAgent_ledgerDto) {
//     return this.agentledgerService.create(createAgentledgerDto);
//   }

//   @Get('all')
//   findAll() {
//     return this.agentledgerService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: number) {
//     return this.agentledgerService.findOne(id);
//   }
 
//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateAgentledgerDto: UpdateAgentledgerDto) {
//     return this.agentledgerService.update(+id, updateAgentledgerDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.agentledgerService.remove(+id);
//   }
// }
