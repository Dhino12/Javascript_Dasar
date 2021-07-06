
class Mail{

    // properties
    from = 'latina@gmail.com'
    contacts = []
    
    // method
    sendMessage = function (msg, to) {
        console.log('Your send: ' , msg, ' to ', to, ' from ', this.from);

        this.contacts.push(to) // menyimpan contact baru

    }
}

const mail = new Mail
mail.sendMessage('Hallo Karen','karen@gmail.com')

// ketika kita ingin menginisialisasi ataupun mengakses sebuah attribute global dari sebuah kelas, maka harus menggunakan this.attributeName.

function People() {
    // properties
    this.from = 'chiya@gmail.com'
    this.contacts = []

    // method
    this.sendMessage = function (msg, to) {

        console.log('Your send: ' , msg, ' to ', to, ' from ', this.from);

        this.contacts.push(to) // menyimpan contact baru
    }
}

const people = new People
people.sendMessage('Hallo nana','nana@gmail.com')
