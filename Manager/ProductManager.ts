import {IProductmanager} from "./IProductManager";
import {Product} from "../model/product";

export class ProductManager implements IProductmanager<Product> {
    products: Product[] = []
    constructor() {

        let product = new Product(15, 'son Mac B1', 'Mỹ Phẩm', 500, 50, '3/2/2023','popular lipstick')
        let product1 = new Product(16, 'son Christian louboutin', 'Mỹ Phẩm', 2000, 20, '3/2/2023','high end lipstick')
        let product2 = new Product(17, 'son Tom ford lip color', 'Mỹ Phẩm', 2500, 25, '3/2/2023','high end lipstick')
        let product3 = new Product(18, 'make-up remover La Roche-Posay', 'Mỹ Phẩm', 1500, 30, '3/2/2023','high end make-up remover')
        let product4 = new Product(19, 'make-up remover Bioderma', 'Mỹ Phẩm', 1500, 30, '3/2/2023','high end make-up remover')
        this.add(product);
        this.add(product1);
        this.add(product2);
        this.add(product3);
        this.add(product4);
    }

    add(t: Product): void {
        this.products.push(t);
    }

    delete(ID: number) {
        if (this.findIndexById(ID) != -1) {
            this.products.splice(this.findIndexById(ID), 1)
        } else {
            console.log('delete error!')
        }
    }

    edit(ID: number, t: Product) {
        if (this.findIndexById(ID) != -1) {
            this.products[this.findIndexById(ID)] = t;
        } else {
            return `edit error!`
        }
    }

    findByName(name: string) {
        let newlist: Array<Product> = [];
       this.products.map((element: Product) => {
           if (element.name.toLowerCase().includes(name.toLowerCase())) {
               newlist.push(element);
           }
       })
        return newlist;
    }
    findByPrice(price: number) {
        let newlist: Array<Product> = [];
        this.products.map((element: Product) => {
            let element1 = element.price.toString()
            if (element1.includes(price.toString())) {
                newlist.push(element);
            }
        })
        return newlist;
    }

    findIndexById(ID: number) {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].ID === ID) {
                index = i;
            }
        }
        return index;
    }
    findProductById(ID: number) {
        if (this.findIndexById(ID) != -1) {
            return this.products[this.findIndexById(ID)].getinfo()
        }
        else {
            return `Find Product Error!`
        }
    }
    findProductById1(ID: number):Product {
        if (this.findIndexById(ID) != -1) {
            return this.products[this.findIndexById(ID)]
        }

    }

    findIndexByName(name: string) {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name == name) {
                index = i;
            }
        }
        return index;
    }

    getlist() {
            return this.products;
    }
    buyProduct(ID: number, Price: number) {

    }
}

