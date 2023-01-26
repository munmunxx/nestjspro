import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirportModule } from './airport/airport.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  Airports } from './airport/entities/airport.entity';
import { AgentModule } from './agent/agent.module';
import { Agent } from './agent/entities/agent.entity';
import { ActivitylogModule } from './activitylog/activitylog.module';
import { Activitylog } from './activitylog/entities/activitylog.entity';
// import { AgentledgerModule } from './agentledger/agent_ledger.module';
// import { Agentledger } from './agentledger/entities/agent_ledger.entity';
// import { AgentFailedModule } from './agent_failed/agent_failed.module';
import { AirlinesModule } from './airlines/airlines.module';
import { Airlines } from './airlines/entities/airline.entity';
import { AllairlinesModule } from './allairlines/allairlines.module';
import { Allairlines } from './allairlines/entities/allairline.entity';
import { AllairportModule } from './allairport/allairport.module';

import { Allairport } from './allairport/entities/allairport.entity';

@Module({
  imports: [AirportModule, 


 TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'b2b',
      entities: [Airports, Agent, Activitylog, Airlines, Allairlines, Allairport],
    }), AgentModule, ActivitylogModule, //AgentledgerModule, //AgentFailedModule, 
    AirlinesModule, AllairlinesModule, AllairportModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
