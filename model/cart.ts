import {Product} from "./product";
import {ProductManager} from "../Manager/ProductManager";
export class Cart extends ProductManager {
    readonly _userID: number;
    private _totalCost: number = 0;


    constructor() {
        super();
        this.products = []
    }

    get userID(): number {
        return this._userID;
    }

    set totalCost(value: number) {
        this._totalCost = value;
    }

    calculateTotalCost(): void {
        let total = 0;
        this.products.forEach(item => {
            total += item.quantity * item.price;
        })
        this.totalCost = total;
    }

    get totalCost(): number {
        return this._totalCost;
    }

    showCart(): void {
        this.products.forEach(item => item.getinfo());
        this.calculateTotalCost();
        console.log(`Total cost = ${this.totalCost}`);
    }

    getProductList(): Array<Product> {
        return this.products;
    }
}