## Statement
statement adalah instruksi untuk melakukan sebuah aksi tertentu, aksi ini bisa termasuk membuat variabel, melakukan perulangan, pengechekan kondisi dll . statement juga dikenal dengan satu baris code atau satu baris code lengkap
```
var yourName; // ini adalah statement
var myName; 
```
singkatnya Statement menunjukkan aksi yang dilakukan.

## Expression 
Expression adalah unit kode yang dapat dievaluasi menjadi suatu nilai. Untuk lebih mudahnya, perhatikan contoh kode berikut:
```
var a = 5;
var b = "hallo";
```
singkatnya Expression merupakan kode yang menghasilkan nilai.

#### Expression Complex
Expression juga dapat menjadi complex dengan gabungan statement dan juga block code contoh:
```
if(expression){
    statement;
}
```
```
function getValue(){ 
    return 100; 
} 

$value = getValue(); // getValue() adalah sebuah expression yang memanggil function dan menghasilkan nilai
```

## Block
block adalah kumpulan statement yang terdiri dari nol atau lebih statement, block diawali dan diakhiri dengan {} contoh: 
```
function($name)
{
    echo "Hallo " . $name;
}
```
`{  }`

## Parameter
Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi. Contoh:
```
function multiply(a, b) {
    return a * b;
}
```

## Argument
Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. Contohnya:
```
multiply(3, 4);

// atau

console.log("ini argument")
```