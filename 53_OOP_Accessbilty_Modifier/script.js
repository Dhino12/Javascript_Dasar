// default semua access modifier JS adalah public 
// untuk yang private bisa menggunakan _ atau var

class Mail{

    from = 'latina@gmail.com'
    _contacts = []

    sendMessage = function (msg, to) {

        console.log('Your send: ' , msg, ' to ', to, ' from ', this.from);
        this._contacts.push(to) // menyimpan contact baru

    }
}

const mail = new Mail
mail.sendMessage('Hallo Karen','karen@gmail.com')
console.log(mail.contacts); // undifiend krna private

function People() {

    this.from = 'chiya@gmail.com'
    var contacts = [] // hanya dapat digunakan di class dgn statement function

    this.sendMessage = function (msg, to) {

        console.log('Your send: ' , msg, ' to ', to, ' from ', this.from);
        contacts.push(to)  
        
    }
}

const people = new People
people.sendMessage('Hallo nana','nana@gmail.com')
console.log(mail.contacts); // undifiend krna private