import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('costumers')
export class CostumersController {

    @Get()
    getCostumers(
        @Query('limit') limit = 10,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return `Lista de Costumers: limit => ${limit}, offset => ${offset}, brand => ${brand}`
    }

    @Get(':id')
    getCostumer(@Param('id') id: string) {
        return `Costumer con Id: ${id}`
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
