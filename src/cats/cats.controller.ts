import { Controller, Get, Req, Post, Body, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

import { IsString, IsInt, IsDefined } from 'class-validator';
import { ValidationPipe } from './joi.validate';

export class CreateCatDto {
  @IsString()
  @IsDefined()
  name: string;
  @IsInt()
  @IsDefined()
  age: number;
  @IsString()
  @IsDefined()
  breed: string;
}

interface Value {
  foo: number;
  bar: number;
}

const value: Value = {
  foo: 0,
  bar: 1,
};

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
