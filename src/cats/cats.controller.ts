import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

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
}
