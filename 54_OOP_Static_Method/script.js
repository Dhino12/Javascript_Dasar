// default semua access modifier JS adalah public 
// untuk yang private bisa menggunakan _ atau var

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
}

const mail = new Mail
mail.sendMessage('Hallo Karen','karen@gmail.com')
console.log(mail.contacts); // undifiend krna private

Mail.isValidPhone(9090909090909)