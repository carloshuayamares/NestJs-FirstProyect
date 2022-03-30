import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get('category/:CAT_id/products/:PROD_id')
    getCategoryProduct(
        @Param('CAT_id') CAT_id: string,
        @Param('PROD_id') PROD_id: string
      ) {
      return `product: ${PROD_id} - category: ${CAT_id}`
    }
  
    @Get()
    getCategories(
        @Query('limit') limit = 10,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return `Lista de Categories: limit => ${limit}, offset => ${offset}, brand => ${brand}`
    }

    @Get(':id')
    getCategory(@Param('id') id: string) {
        return `Category con Id: ${id}`
    }

    @Post()
    create(@Body() payload: any) {
        return {
            payload,
            message: 'creaccion realizada.'
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
