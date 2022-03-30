import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from './../services/products.service';

import { ParseIntPipe } from '../common/parse-int.pipe'
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos'

@Controller('products')
export class ProductsController {
    constructor( private productsService: ProductsService) {}

    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
      ) {
        // return `products: limit => ${limit} - offset: => ${offset}; brand: ${brand}`
        return this.productsService.findAll();
    }
  
    @Get('filter')
    getFilter() {
      return `Estas accediendo a un filtro`
    }
  
    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(@Param('id', ParseIntPipe) id: number) {
      // EXPRESS
      // response.status(200).send({message: `product ${id}`})
      // return {message: `product ${id}`}
      return this.productsService.findOne(id)
    }

    @Post()
    create(@Body() payload: CreateProductDto) {
      // return {
      //   menssage: 'accion de crear',
      //   payload,
      // }
      return this.productsService.create(payload);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto ) {
      // return {
      //   id,
      //   payload,
      // }
      return this.productsService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      // return {
      //   id,
      //   menssagge: `Eliminamos el producto con id: ${id}`
      // }
      return this.productsService.remove(id);
    }
}
