class Mail{

    _from = 'latina@gmail.com'
    _contacts = []

    sendMessage = function (msg, to) {

        console.log('Your send: ' , msg, ' to ', to, ' from ', this._from);
        this._contacts.push(to) // menyimpan contact baru

    }

    static isValidPhone(phoneNumber){
        return typeof phoneNumber === 'number'
    }

    constructor(author){
        this.from = author
    }

    get(){
        return this._from
    }

    set(emailFrom){
        this._from = emailFrom;
    }
}

class WhatsApp extends Mail{
    username = 'nana'
    isBussinessAccount = false

    myProfile = function () {
        return `my name is ${this.username}, is ${this.isBussinessAccount? 'Bussiness' : 'Personal'} Account`;
    }
}

const mail = new Mail("nana@gmail.com")
mail.sendMessage('Hallo Karen','karen@gmail.com')

const wa1 = new WhatsApp(1010101010);
console.log(wa1.myProfile());
console.log(wa1.get());