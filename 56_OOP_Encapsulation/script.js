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

const mail = new Mail("nana@gmail.com")

mail.sendMessage('Hallo Karen','karen@gmail.com')

Mail.isValidPhone(9090909090909)


// untuk mendapatkan property, bisa menggunakan setter dan getter
console.log(mail.get());
mail.set("mocha@gmail.com")
mail.sendMessage('Hallo Joko','joko@gmail.com')