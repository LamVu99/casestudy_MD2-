export class Product {
    private _ID: number;
    private _name: string;
    private _type: string;
    private _price: number;
    private _quantity: number;
    private _date: string;
    private _Description: string;

    constructor(ID: number, name: string, type: string, price: number, quantity: number, date: string, Description: string) {
        this._ID = ID;
        this._name = name;
        this._type = type;
        this._price = price;
        this._quantity = quantity;
        this._date = date;
        this._Description = Description;

    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    get Description(): string {
        return this._Description;
    }

    set Description(value: string) {
        this._Description = value;
    }
    getinfo(): any {
        return `ID: ${this.ID} | name: ${this.name} | type: ${this.type} | price: ${this.price} | quantity ${this.quantity} | date: ${this.date} | Product Description: ${this.Description}`;
    }
}
