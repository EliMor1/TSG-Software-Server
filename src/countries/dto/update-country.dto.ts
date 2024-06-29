/* eslint-disable prettier/prettier */

import { IsNumber, IsString, IsNotEmpty, } from 'class-validator';
export class UpdateCountryDto {

    @IsNotEmpty()
    @IsString()
    readonly capital?: string;

    @IsNotEmpty()
    @IsNumber()
    readonly population?: number;
  }
  