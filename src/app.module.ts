import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config/config';
import { OrganizationModule } from './organization/organization.module';
import { ChargepointModule } from './chargepoint/chargepoint.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
  }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.host,
      port: config.dbport,
      username: config.dbuser,
      password: config.dbpass,
      database: config.database,
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      synchronize: true,
    }),
    OrganizationModule,
    ChargepointModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
