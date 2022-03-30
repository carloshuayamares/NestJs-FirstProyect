import { Controller, Get, Query, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    @Get()
    getOrders(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
      ) {
      return `List of Orders: limit => ${limit} - offset: => ${offset}; brand: ${brand}`
    }
  
    @Get('filter')
    getOrdersFilter() {
      return `Estas accediendo a un filtro de Orden`
    }
  
    @Get(':id')
    getOrder(@Param('id') id: string) {
      return `Orden ${id}`
    }

    @Post()
    create(@Body() payload: any) {
      return {
        message: 'ok',
        payload,
      }
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload: any) {
        return {
            id,
            payload,
            message: 'Update satisfactorily'
        }
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return {
            id,
            message: `Se elimino el elemento con id: ${id}`
        }
    }

}
