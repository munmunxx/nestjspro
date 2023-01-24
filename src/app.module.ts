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

@Module({
  imports: [AirportModule, 

 TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'b2b',
      entities: [Airports, Agent, Activitylog],
    }), AgentModule, ActivitylogModule,
  // AgentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
