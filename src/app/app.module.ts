import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonModule } from './person/person.module';
import { HobbyModule } from './hobby/hobby.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb+srv://ousshsn:ousshsn@rest.ef0yl.mongodb.net/nestdb?retryWrites=true&w=majority'), 
  PersonModule, 
  HobbyModule, 
  GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
    playground: true,
    debug: false,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
