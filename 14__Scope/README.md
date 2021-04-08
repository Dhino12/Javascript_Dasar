## Scope
Variable Scope adalah Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”, sementara variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.

```
function sum(num) {
    total = num + num; // akan dianggap variable global krna tdk mnggnakn const / let

    return total;
}

let total = 9;
let number  = sum(20);

console.log(total)

// ===== output =====
40
```

> Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.

