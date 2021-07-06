
class Mail{

    from = 'latina@gmail.com'

    sendMessage = function (msg, to) {
        console.log('Your send: ' , msg, ' to ', to, ' from ', this.from);
    }
}

const mail = new Mail
mail.sendMessage('Hallo Karen','karen@gmail.com')

// atau bisa

function People() {
    this.from = 'chiya@gmail.com'
    this.sendMessage = function (msg, to) {
        console.log('Your send: ' , msg, ' to ', to, ' from ', this.from);
    }
}

const people = new People
people.sendMessage('Hallo nana','nana@gmail.com')
