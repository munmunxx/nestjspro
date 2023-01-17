import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirportModule } from './airport/airport.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  Airports } from './airport/entities/airport.entity';

@Module({
  imports: [AirportModule,
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'b2b',
      entities: [Airports],
     // synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
