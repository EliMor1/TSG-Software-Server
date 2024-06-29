/* eslint-disable prettier/prettier */

import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Country } from '../repositories/country.schema';
import { ICountry } from 'src/common/interfaces/country.interface';
import { UpdateCountryDto } from './dto/update-country.dto';
import { CountriesDAL } from './DAL/countries.dal';

@Injectable()
export class CountriesService {
  constructor(private readonly countriesDAL: CountriesDAL) {}

  async findAll(): Promise<ICountry[]> { 
      const countriesData = await this.countriesDAL.findAll();
      if(countriesData){
          const countries: ICountry[] = countriesData.map((country: Country) => ({
            name: country.name.common,
            capital: country.capital[0],
            region: country.region,
            subRegion: country.subregion,
            population: country.population,
            timezone: country.timezones[0],
            continent: country.continents[0],
            flagUrl: country.flags.png 
        }));
        return countries;
      }
      throw new InternalServerErrorException("Coudn't get the countries.");
  }

  async findOne(name: string): Promise<ICountry> { 
      const countryData = await this.countriesDAL.findOne(name);
      if(!countryData){
        throw new NotFoundException("Coudn't get the specified country.");
      }
      const country :ICountry ={
        name: countryData.name.common,
        capital: countryData.capital[0], // Assuming there's always at least one capital
        region: countryData.region,
        subRegion: countryData.subregion,
        population: countryData.population,
        timezone: countryData.timezones[0], 
        continent: countryData.continents[0], 
        flagUrl: countryData.flags.png 
      }
      return country
  }


  async update(name: string, updateCountryDto: UpdateCountryDto): Promise<void> { 
    const updatedCountry = await this.countriesDAL.update(name, updateCountryDto);
    if(!updatedCountry){
      throw new InternalServerErrorException("Coudn't update the specified country.");
    }
  }
}

