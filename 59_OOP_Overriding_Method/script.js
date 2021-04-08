class Mail{

    _from = 'latina@gmail.com'
    _contacts = []

    sendMessage = function (msg, to) {

        console.log('Your send: ' , msg, ' to ', to, ' from ', this._from);
        // this._contacts.push(to) // menyimpan contact baru

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

    constructor(username, isBussinessAccount, phoneNumber){
        super(phoneNumber) // untuk mengakses parrent class overriding constructor
        this.username = username
        this.isBussinessAccount = isBussinessAccount
    }

    // Overriding method => Melakukan Override Total
    sendMessage = function (msg, to) {
        console.log('Send by WA');
    }

    // https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Classes#memanggil_kelas_super_dengan_keyword_super
    kirimPesan(){
        // super.sendMessage("latina","karen")
        console.log('from: ' + super.get());
    }
}

const mail = new Mail("nana@gmail.com")
mail.sendMessage('Hallo Karen','karen@gmail.com')

console.log(" ======== Child Class WhatsApps ========");
const wa1 = new WhatsApp("Lalatina",false, 0920131311211); 
wa1.kirimPesan()
wa1.sendMessage("Hallo","Chiya")
console.log(wa1.myProfile());
console.log(wa1.get());