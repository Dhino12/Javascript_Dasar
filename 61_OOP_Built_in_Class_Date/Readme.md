## Object Composition 
JavaScript sendiri terdapat built-in Object bawaan, misalkan Date, Object, Array, Math, dan String yang dapat digunakan untuk memanipulasi data-data terkait dengan array, perintah matematik, manipulasi karakter, dan manipulasi objek.
Date merupakan core object bawaan dari bahasa pemrograman JavaScript yang digunakan untuk utilitas terkait tanggal dan waktu. Ini sangat membantu kita ketika dalam program yang kita buat terdapat penggunaaan dan manipulasi tanggal dan waktu.


## Mehod dalam object Date
| Method        | Penjelasan               | Contoh Penggunaan | 
| ------------- | ------------------------ | ----------------- |
| getMonth()    | Nilai kembaliannya adalah bulan dalam bentuk angka (0 sampai 11), 0 berarti Januari. | myDate.getMonth() |
| getFullYear() | Nilai kembaliannya adalah tahun, misalkan 2021. | myDate.getFullYear() |
| getDate()     | Nilai kembaliannya adalah tanggal dari 1 sampai 31. |  myDate.getDate() |
| getHours()    | Nilai kembaliannya adalah jam dari 0 sampai 23 | myDate.getHours() | 
| getMinutes()  | Nilai kembaliannya adalah menit dari 0 sampai 59 Nilai kembaliannya | myDate.getMinutes() | 
| getSeconds()  | 	Nilai kembaliannya adalah detik dari 0 sampai 59 | myDate.getSeconds() | 
| getMilliseconds() | Nilai kembaliannya adalah mili-detik dari 0 to 999 | myDate.getMilliseconds() |
| getTime()     | Nilai kembaliannya adalah waktu dalam bentuk epoch mili-detik (dimulai dari 1 January, 1970 yang berarti 0) | myDate getTime() |
| getDay()      | Nilai kembaliannya adalah hari dalam seminggu dari 0 sampai 6. 0 berarti minggu | myDate.getDay() |

**Static Method**
| Method | Penjelasan               | Contoh Penggunaan |
| ------ | ------------------------ | ------------------| 
| parse(datestring) | digunakan untuk merubah tanggal dalam format string, menjadi epoch miliseconds | Date.parse("2021-01-01") |
| UTC(year, [..params]) | digunakan untuk merubah tanggal dalam format string, menjadi epoch miliseconds | Date.UTC(2021, 01, 01) |


## Date String Format

| Format              | Penjelasan                        |
| ------------------- | --------------------------------- |
| YYYY                | 4 digit tahun, misalkan : 2021    |
| MM                  | 2 digit bulan, misalkan : 01 berarti Januari    |
| DD                  | 2 digit tanggal 0 sampai 31    |
| HH	              | 2 digit jam 0 sampai 23 | 
| mm	              | 2 digit menit 0 sampai 59 |
| ss                  | 2 detik detik 0 sampai 49 |
| sss                 | 3 digit milidetik 0 sampai 999 |
| -                   | Pemisah untuk tanggal |
| :                   | Pemisah untuk waktu |
| Z                   | Berarti tanggal akan diatur sebagai UTC |
