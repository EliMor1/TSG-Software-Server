/* eslint-disable prettier/prettier */

// //use validation
// //return status
// //return http code.

import { 
  Controller,
  Get,
  Param,
  Body,
  Put,
  HttpException,
  HttpStatus,
  HttpCode,
  UsePipes,
  ValidationPipe } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('countries')
@UsePipes(new ValidationPipe({ transform: true }))
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    try{
      return this.countriesService.findAll();
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':name')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('name') name: string) {
    try{
      return this.countriesService.findOne(name);
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':name')
  @HttpCode(HttpStatus.OK)
  async update(@Param('name') name: string, @Body() updateCountryDto: UpdateCountryDto) {
    try{
      return this.countriesService.update(name, updateCountryDto);
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
