export interface IUserManager<T> {
    addUser(t: T): void;
    getList()
    lockUser(accountname: string)
    unlockUser(accountname: string)
    findIndexByAccountName(accountname: string)

}