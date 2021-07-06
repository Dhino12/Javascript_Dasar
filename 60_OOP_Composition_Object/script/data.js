// [1] list of abstractions
const candSendMessage = self => ({
    sendMessage: () => console.log('Send Message: ', self.message)
});


const checkIsValidPhone = self => ({
    isValid: () => console.log('Valid Phone: ', self.from)
})

// [2] crate object composition
const personalEnterprise = (from, message, store) => {

    // [3] attributes
    const self = {
        from, message, store
    }

    // [4] method
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has create: ', self.store)
    })

    // [5] create object composition
    return Object.assign(self, personalEnterpriseBehaviors(self), candSendMessage(self), checkIsValidPhone(self))
}

console.log('============= Object Composition =============');

const pel = personalEnterprise('emilia@gmail.com','Hello Karen', 'Karen')
pel.createCatalog() // catalog has create : Karen
pel.sendMessage() // send message : Hello Karen

/* 

* Kita membuat sebuah abstraksi untuk method-method yang umum digunakan (di sini misalkan method mengirim pesan, dan validasi nomor hp).
* Kita membuat sebuah kelas baru dengan nama personalEnterprise, di mana seperti biasa kita dapat menggunakan parameter yang akan digunakan.
* Pada  object composition ini, penggunaan parameter biasa digunakan untuk mendaftarkan attribute-attribute dari kelas tersebut. Pada contoh 
  di atas, kita mengumpulkan attribute tersebut pada konstanta bernama self atau state.
* Method, kita dapat juga menambahkan method/fungsi yang spesifik hanya ada pada kelas tersebut (kapabilitasnya hanya pada kelas tersebut / 
  tidak umum).
* Proses pembuatan object dengan perintah Object.assign(attribute, method1, method2, methodN).

*/