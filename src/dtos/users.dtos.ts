import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator'
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly edad: number;

    @IsString()
    @IsNotEmpty()
    readonly pass: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}