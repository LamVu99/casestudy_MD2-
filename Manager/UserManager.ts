import {User} from "../model/user";
import {IUserManager} from "./IUserManager";

export class UserManager implements IUserManager<User>{
    users: User[] = []
    constructor() {
        let user1 = new User('dange1995', 'dange1995');
        let user2 = new User('dange1996', 'dange1996');
        let user3 = new User('dange1997', 'dange1997');
        this.addUser(user1);
        this.addUser(user2);
        this.addUser(user3);
    }

    lockUser(accountname: string) {
if (this.findIndexByAccountName(accountname) != -1) {
    this.users[this.findIndexByAccountName(accountname)].setlocked();
    console.log('Khóa tài khoản thành công!')
} else {
    console.log("Lock User Fail!")
}
    }

    unlockUser(accountname: string) {
        if (this.findIndexByAccountName(accountname) != -1) {
            this.users[this.findIndexByAccountName(accountname)].unlock();
        }
        else {
            console.log("Unlock User Fail!")
        }
    }
    addUser(t: User): void {
        this.users.push(t);
    }

    getList() {
       return this.users;
    }
    findIndexByAccountName(accountname: string) {
        let index = -1;
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].accountname == accountname) {
                index = i;
            }
        }
        return index;
    }
}