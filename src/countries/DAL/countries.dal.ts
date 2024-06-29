/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country, CountryDocument } from '../../repositories/country.schema';
import { UpdateCountryDto } from '.././dto/update-country.dto';

@Injectable()
export class CountriesDAL {
  constructor(@InjectModel(Country.name) private countryModel: Model<CountryDocument>) {}

  async findAll(): Promise<Country[]> {
    try{
      const countriesData = await this.countryModel.find().exec();
      if(countriesData){
        return countriesData;
      }
      return null;
    }
    catch(error){
      console.error(error);
      return null;
    }
  }

  async findOne(name: string): Promise<Country> {
    try{
      const countryData = await this.countryModel.findOne({ 'name.common': name }).exec();
      if(!countryData) return null;
      return countryData
    }
    catch(error){
      console.error(error);
      return null;
    }
  }


  async update(name: string, updateCountryDto: UpdateCountryDto): Promise<Country> {
    try{
        const countryData = await this.countryModel.findOneAndUpdate({ 'name.common': name }, { $set: {  population: updateCountryDto.population, capital:[updateCountryDto.capital] } }, { new: true, fields: { name: 1 } }).exec();
        if(!countryData) return null;
        return countryData
    }
    catch(error){
        console.error(error);
        return null;
    }
    }

}

