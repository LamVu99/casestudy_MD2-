import {ProductManager} from "./Manager/ProductManager";
import {Product} from "./model/product";
import {User} from "./model/user";
import {UserManager} from "./Manager/UserManager";
import {Cart} from "./model/cart";


let input = require('readline-sync');
let ID = 1;
let product1 = new ProductManager();
let adminName = 'admin1234'
let adminpassWord = 'admin1234'
let userlist = new UserManager()
let cart = new Cart()
function showLogin() {
    let choice = -1;
    do {
        console.log(`
        ------**--Welcome to the Skywalker store--**------
        1.Admin.
        2.User.
        0.Log Out`)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                checkAdminAccount();
                break;
            case 2:
                showUserMenu()
                break;
        }
    } while (choice != 0)
}

function showUserMenu() {
    let choice = -1;
    do {
        console.log(`
        1.Create New User Account.
        2.Login.
        0.Exit.`)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                creatUserAcount()
                break;
            case 2:
                checkUserAcount()
                break;
        }
    } while (choice != 0)
}

function creatUserAcount() {
    let regexusername = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let regexuserpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let username = '';
    let userpassword = '';
    let flag = true;
    do {
        username = input.question('Create User account (4 characters - 4 numbers): ')
        userpassword = input.question('Create User password (4 characters - 4 numbers): ')
        if (regexusername.test(username)) {
            if (regexuserpassword.test(userpassword)) {
                flag = true;
                console.log(('Đăng kí thành công!'))
                let users = new User(username, userpassword)
                userlist.addUser(users);
            }
        } else {
            console.log(('Không đúng cú pháp xin mời nhập lại.'))
            flag = false;
        }
    } while (!flag)
}

function getElementUserName(username) {
    for (let i = 0; i < userlist.getList().length; i++) {
        if (username == userlist.getList()[i].accountname) {
            return true;
        }
    }
    return false;
}
function getKeyUserName(username) {
    for (let i = 0; i < userlist.getList().length; i++) {
        if (username == userlist.getList()[i].isLocked) {
            return true;
        }
    }
    return false;
}

function getElementUserPassword(password) {
    for (let i = 0; i < userlist.getList().length; i++) {
        if (password == userlist.getList()[i].password) {
            return true;
        }
    }
    return false;
}

function checkUserAcount() {
    let regexusername = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let regexpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let username = '';
    let password = '';
    let flag = true;

    do {
        username = input.question('Enter User account: ')
        password = input.question('Enter Password account: ')

        if (regexusername.test(username) && getElementUserName(username)) {
            if (regexpassword.test(password) && getElementUserPassword(password)) {
                flag = true;
                console.log(('Đăng nhập thành công!'))
                if (flag) {
                    shoppingMenu()
                }
            }
        } else {
            console.log(('Sai tên tài khoản hoặc mật khẩu.'))
            flag = false;
        }
    } while (!flag)
}

function checkAdminAccount() {
    let regexusername = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let adminname = '';
    let flag = true;
    do {
        adminname = input.question('Enter admin account : ')
        if (regexusername.test(adminname)) {
            flag = true;
            if (flag && adminname == adminName) {
                console.log(('Xin mời nhập mật khẩu admin!'))
                checkPasswordAdmin()
            }
        } else {
            console.log(('Sai tên tài khoản hoặc mật khẩu.'))
            flag = false;
        }
    } while (!flag)
}

function getListUser() {
    let users = userlist.getList()
    for (const usersKey in users) {
        console.log(users[usersKey].getInfo())
    }
}

function checkPasswordAdmin() {
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let password = '';
    let flag = true;
    do {
        password = input.question('Enter password : ')
        if (regexPassword.test(password)) {
            console.log(('Đăng nhập thành công !'))
            flag = true;
            if (flag) {
                showMainMenuAdmin()
            }
        } else {
            console.log(('Xin mời nhập lại!'))
            flag = false;
        }
    } while (!flag)
}

function showShoppingMenuUser() {
    let choice = -1;
    do {
        console.log(`
        1.Get List.
        2.Arrange Product By Price.
        3.Find Product By Name.
        4.Find Product By Price.
        5.Buy Product.
        0.Log out.`)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                getList()
                break;
            case 2:
                ShowByPrice()
                break;
            case 3:
                findByName()
                break;
            case 4:
                findByPrice()
                break;
            case 5:
                buyProduct()
                break;
        }
    } while (choice != 0)
}

function showMainMenuAdmin() {
    let choice = -1;
    do {
        console.log(`
        1.Manager User
        2.Manager Product
        0.Log Out`)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                showManagerUser()
                break;
            case 2:
                showMainMenuManager()
                break;
        }
    } while (choice != 0)
}

function showManagerUser() {
    let choice = -1;
    do {
        console.log(`
        1. Get List User.
        2. Lock User account.
        3. Unlock User account.
        4. Show account have locked.
        0. Exit.`)
        choice = +input.question('Enter Choice: ');
        switch (choice) {
            case 1:
                getListUser();
                break;
            case 2:
                lockUser()
                break;
            case 3:
                unlockUser()
                break;
            case 4:
                showUserLocked()
        }
    } while (choice != 0)
}

function lockUser() {
    let accountname = input.question('Enter name: ');
    userlist.lockUser(accountname);
}

function unlockUser() {
    let accountname = input.question('Enter name: ');
    userlist.unlockUser(accountname);
}

function showUserLocked() {
    let checkuser = userlist.getList();
    for (const element in checkuser) {
        if (checkuser[element].isLocked) {
            console.log(`Lock User: ${checkuser[element].getInfo()}`)
        }
        if (checkuser[element] == null) {
            console.log(`Không có tài khoản bị khóa!`)
        }
    }
}
function shoppingMenu() {
    let choice = -1;
    do {
        console.log(`
        -----******-----Shopping Menu-----******-----
        1.Shopping.
        2.My Cart.
        3.History Buy.`)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                showShoppingMenuUser();
                break;
            case 2:
                showMenuBuy();
                break;
            case 3:
                break;
        }
    } while (choice != 0)
}
function showMainMenuManager() {
    let choice = -1
    do {
        console.log(`
        -----Main Menu-----
        1.Add Product.
        2.Get list.
        3.Delete Product.
        4.Edit.
        5.Find Product; By Name.
        6.Find Product By ID.
        0.Exit.
        `)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                addproduct()
                break;
            case 2:
                getList()
                break;
            case 3:
                deleteProduct()
                break;
            case 4:
                editProduct()
                break;
            case 5:
                findByName()
                break;
            case 6:
                findProductByID()
                break;
        }

    } while (choice != 0)
}


function addproduct() {
    console.log(`-----Menu Add-----`);
    let id = ID;
    let name = input.question('Enter name: ');
    let type = input.question('Enter type: ');
    let price = +input.question('Enter price: ');
    let quantity = +input.question('Enter quantity: ');
    let date = input.question('Enter date: ');
    let Description = input.question('Enter Description: ');
    let product: Product = new Product(id, name, type, price, quantity, date, Description)
    product1.add(product)
    console.log('add finish!')
    return ID++
}

function getList() {
    let product: any = product1.getlist();
    if (product.length != 0) {
        for (const productKey in product) {
            console.log(product[productKey].getinfo())
        }
    } else {
        console.log(`Can't get list without product`)
    }

}

function findProductByID() {
    let id = +input.question('Enter ID: ');
    console.log(product1.findProductById1(id));
}

function deleteProduct() {
    console.log('-----Delete Menu-----')
    let id = +input.question('Enter id: ')
    product1.delete(id);
    console.log('-----Delete finish!-----')
}

function editProduct() {
    console.log('-----Edit Menu-----')
    let id = +input.question('Enter ID: ');
    let name = input.question('Enter name: ');
    let type = input.question('Enter type: ');
    let price = +input.question('Enter price: ');
    let quantity = +input.question('Enter quantity: ');
    let date = input.question('Enter date: ');
    let Description = input.question('Enter Description: ');
    let product: Product = new Product(id, name, type, price, quantity, date, Description)
    product1.edit(id, product);
    console.log('-----Edit finish!-----')
}

function findByName() {
    console.log('-----Find Menu-----')
    let name = input.question('Enter Name: ')
    let findname = product1.findByName(name)
    for (const findnameKey in findname) {
        console.log(findname[findnameKey].getinfo())
    }
}

function findByPrice() {
    console.log('-----Find Menu-----')
    let price = input.question('Enter Price: ')
    let findprice = product1.findByPrice(price)
    for (const findpriceKey in findprice) {
        console.log(findprice[findpriceKey].getinfo())
    }
}

function ShowByPrice() {
    let showbyprice = product1.getlist()
    let arrange = showbyprice.sort((a, b) => {
        return a.price - b.price;
    })
    for (const arrangeKey in arrange) {
        console.log(arrange[arrangeKey].getinfo())
    }
}
function getElementcart(ID: number) {
    for (let i = 0; i < product1.getlist().length; i++) {
        if (ID == product1.getlist()[i].ID) {
            return true;
        }
    }
    return false;
}
function buyProduct() {
    let id = +input.question('Enter ID: ');
    let quantity = +input.question('Enter quantity: ')
    let product = product1.findProductById1(id)
    if (product) {
        if (product.quantity < quantity) {
            console.log('Vượt quá số lượng sản phẩm trong kho!')
        } else {
            product.quantity = quantity;
            cart.add(product)
        }
    }
}
function showMenuBuy() {
    let choice = -1;
    do {
        console.log(`
        -----Menu Buy-----
        1. Get List Buy.
        2. Total price.
        3. Confirm Buy.
        0. Exit.
        `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                getListCart();
                break;
            case 2:
                totalCart();
                break;
            case 3:
                confirmBuy();
                break;
        }
        

    } while (choice != 0)
}
    function confirmBuy() {
        let choice = -1;
        do {
            console.log(`
        -----Menu Buy-----
        1. Confirm Buy Product.
        0. Exit.
        `)
            choice = +input.question('Enter choice: ');
            switch (choice) {
                case 1:

            }


        } while (choice != 0)
    }
function getListCart() {
    console.table(cart.getProductList());
}
function totalCart() {
    let productcart = cart.getProductList();
    let total = 0;
    for (const productcartKey in productcart) {
        total += productcart[productcartKey].price * productcart[productcartKey].quantity;
}
    console.log('Total cost: '+total + '$')
    }
showLogin()
