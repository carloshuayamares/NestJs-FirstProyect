import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './../services/users.service'

import { ParseIntPipe } from '../common/parse-int.pipe'
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos'

@Controller('users')
export class UsersController {
    constructor( private userService: UsersService) {}

    @Get()
    getUsers(
        @Query('limit') limit = 10,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return this.userService.findAll()
        // return `Lista de Usuarios: limit => ${limit}, offset => ${offset}, brand => ${brand}`
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        // return `Usuario con Id: ${id}`
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body() payload: CreateUserDto) {
        // return {
        //     payload,
        //     message: 'creaccion realizada.'
        // }
        return this.userService.create(payload);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateUserDto) {
        // return {
        //     id,
        //     payload,
        //     message: 'Update satisfactorily'
        // }
        return this.userService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        // return {
        //     id,
        //     message: `Se elimino el elemento con id: ${id}`
        // }
        return this.userService.remove(id);
    }

}
