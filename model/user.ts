export class User {
    private _accountname: string;
    private _password: string;
    private _isLocked: boolean = false;

    constructor(accountname: string, password: string) {
        this._accountname = accountname;
        this._password = password;
    }


    get isLocked(): boolean {
        return this._isLocked;
    }
    get accountname(): string {
        return this._accountname;
    }
    setlocked(): void {
        this._isLocked = true;
    }
    unlock(): void {
        this._isLocked = false;
    }

    set accountname(value: string) {
        this._accountname = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
    getInfo() {
        return `Account name: ${this.accountname} Password: ${this.password}`
    }
}