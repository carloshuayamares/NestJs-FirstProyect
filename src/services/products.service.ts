import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos'

@Injectable()
export class ProductsService {
    private counterId = 1;
    private products: Product[] = [
        {
            id: 1,
            name: 'Product 1',
            description: 'descripcion 1',
            price: 100,
            stock: 10,
            image: '',
        },
    ];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        const product = this.products.find((item) => item.id === id);
        if (!product) {
            throw new NotFoundException(`Product #${id} Not Found.`);
        }
        return product;
    }

    create(payload: CreateProductDto) {
        this.counterId = this.counterId + 1;
        const newProduct = {
            id: this.counterId,
            ...payload,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: UpdateProductDto) {
        const product = this.findOne(id);
        if (product) {
            const index = this.products.findIndex((item) => item.id === id);
            this.products[index] = {
                ...product,
                ...payload,
            };
            return this.products[index]
        }
        return null
    }

    remove(id: number) {
        const product = this.products.find((item) => item.id === id);
        const index = this.products.findIndex((item) => item.id === id);

        if (!product) {
            throw new NotFoundException(`Product #${id} Not Found.`);
        }
        this.products.splice(index, 1)
        return true;
    }
}
