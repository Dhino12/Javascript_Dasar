## OOP
Object Oriented Programming (OOP) adalah salah satu paradigma dalam dunia pemrograman komputer. Ia adalah pendekatan berbasiskan objek, di mana suatu objek terdiri dari kumpulan atribut dan method di dalamnya. 

```

// class
class Animal {

    name = 'cat'
    run = function(to){
        console.log('cat ', this.name, ' run ', to)
    }
}

// instance class
let cat = Animal(); 

cat.name = 'rikka'
cat.run('home')

```

bisa juga dengan menggunakan function untuk penulisan class di javascript

```
function People() {
    this.from = 'chiya@gmail.com'
    this.sendMessage = function (msg, to) {
        console.log('Your send: ' , msg, ' to ', to, ' from ', this.from);
    }
}

const people = new People
people.sendMessage('Hallo nana','nana@gmail.com')

```