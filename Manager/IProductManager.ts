export interface IProductmanager<T> {
    getlist();
    add(t: T): void;
    findByName(name: string)
    edit(ID: number, t: T)
    findIndexById(ID: number)
    findIndexByName(name: string)
    delete(ID: number);
    findProductById(ID: number);
    findByPrice(price: number)
    buyProduct(ID: number, Price: number);
    findProductById1(ID: number)
}