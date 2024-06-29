/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from '../repositories/country.schema';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { CountriesDAL } from './DAL/countries.dal';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }])
  ],
  providers: [CountriesService, CountriesDAL],
  controllers: [CountriesController],
})
export class CountriesModule {}
