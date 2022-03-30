import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get()
    getAll(
        @Query('limit') limit = 10,
        @Query('offset') offset = 0,
    ) {
        return {
            message:  `List of Brands: limit => ${limit} - offset: => ${offset}`
        }
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return {
            message: `Brand con id ${id}`
        }
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
