import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginEntity } from './login/entities/login.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'sweet',
    password: 'aziz',
    database: 'sweet',
    entities: [LoginEntity],
    synchronize: true,
  }),
   LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
