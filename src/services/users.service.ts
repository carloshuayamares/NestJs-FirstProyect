import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './../entities/user.entity'
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos'

@Injectable()
export class UsersService {
    private counterId = 1;
    private users: User[] = [
        {
            id: 1,
            username: 'Carlos',
            email: 'carlos@gmail.com',
            edad: 22,
            pass: '****',
        },
    ];

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find((x) => x.id === id);
        if(!user) {
            throw new NotFoundException(`Usuario #${id} not found.`)
        }
        return user;
    }

    create(payload: CreateUserDto) {
        this.counterId = this.counterId + 1;
        const newUser = {
            id: this.counterId,
            ...payload,
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, payload: UpdateUserDto) {
        const user = this.findOne(id);
        if(user) {
            const index = this.users.findIndex((x) => x.id === id);
            this.users[index] = {
                ...user,
                ...payload,
            }
            return this.users[index]
        }
        return null
    }

    remove(id: number) {
        const user = this.users.find((x) => x.id === id);
        const index = this.users.findIndex((x) => x.id === id);
        if(!user) {
            throw new NotFoundException(`Usuario #${id} not found.`)
        };
        this.users.splice(index, 1);
        return true;
    }
}
