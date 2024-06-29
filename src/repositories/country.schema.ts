/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CountryDocument = Country & Document;

@Schema({ versionKey: false, collection: 'countries' })
export class Country {
  @Prop(raw({
    common: { type: String, required: true },
    official: { type: String },
    nativeName: { type: Object }
  }))
  name: Record<string, any>;

  @Prop([String])
  tld: string[];

  @Prop()
  cca2: string;

  @Prop()
  ccn3: string;

  @Prop()
  cca3: string;

  @Prop()
  independent: boolean;

  @Prop()
  status: string;

  @Prop()
  unMember: boolean;

  @Prop(raw({
    XPF: { type: raw({ name: { type: String }, symbol: { type: String } }) }
  }))
  currencies: Record<string, any>;

  @Prop(raw({
    root: { type: String },
    suffixes: { type: [String] }
  }))
  idd: Record<string, any>;

  @Prop([String])
  capital: string[];

  @Prop([String])
  altSpellings: string[];

  @Prop()
  region: string;

  @Prop()
  subregion: string;

  @Prop(raw({ fra: { type: String } }))
  languages: Record<string, any>;

  @Prop(raw({
    ara: { type: raw({ official: { type: String }, common: { type: String } }) },
  }))
  translations: Record<string, any>;

  @Prop([Number])
  latlng: number[];

  @Prop()
  landlocked: boolean;

  @Prop()
  area: number;

  @Prop(raw({
    eng: { type: raw({ f: { type: String }, m: { type: String } }) }
  }))
  demonyms: Record<string, any>;

  @Prop()
  flag: string;

  @Prop(raw({
    googleMaps: { type: String },
    openStreetMaps: { type: String }
  }))
  maps: Record<string, any>;

  @Prop()
  population: number;

  @Prop(raw({
    signs: { type: [String] },
    side: { type: String }
  }))
  car: Record<string, any>;

  @Prop([String])
  timezones: string[];

  @Prop([String])
  continents: string[];

  @Prop(raw({
    png: { type: String },
    svg: { type: String }
  }))
  flags: Record<string, any>;

  @Prop(raw({}))
  coatOfArms: Record<string, any>;

  @Prop()
  startOfWeek: string;

  @Prop(raw({
    latlng: { type: [Number] }
  }))
  capitalInfo: Record<string, any>;

  @Prop(raw({
    format: { type: String },
    regex: { type: String }
  }))
  postalCode: Record<string, any>;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
