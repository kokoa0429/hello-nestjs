import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';

export class CreateCatDto {
    name: string;
    age: number;
    breed: string;
  }

interface Value {
    foo: number;
    bar: number;
  }
  
  const value: Value = {
    foo: 0,
    bar: 1
  };

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): object {
      return {sushi:"sushisushi", param: request.query};
    }
    
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }

}
