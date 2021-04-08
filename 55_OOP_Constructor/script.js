// Constructor adalah sebuah method/function yang dijalankan pertama kali ketika object dibuat.

class Mail{

    from = 'latina@gmail.com'
    _contacts = []

    sendMessage = function (msg, to) {

        console.log('Your send: ' , msg, ' to ', to, ' from ', this.from);
        this._contacts.push(to) // menyimpan contact baru

    }

    static isValidPhone(phoneNumber){
        return typeof phoneNumber === 'number'
    }

    constructor(author){
        this.from = author
    }
}

const mail = new Mail("nana@gmail.com")

mail.sendMessage('Hallo Karen','karen@gmail.com')
console.log(mail.contacts); // undifiend krna private

Mail.isValidPhone(9090909090909)