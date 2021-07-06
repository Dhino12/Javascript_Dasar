# Node Package Manager / NPM
![Node Package Manager](npm_image.png)
[NodeJS](https://nodejs.org/en/)
Package manager merupakan tools yang dapat membantu pengelolaan package pada proyek agar lebih mudah. Kita dapat dengan mudah memasang dan menghapus package yang dibuat oleh orang lain pada proyek kita. Selain itu, kita juga dapat menulis module/package untuk dikonsumsi secara publik.
Java memiliki Maven dan Gradle, PHP memiliki Composer, dan Python memiliki pip, javascript memiliki NPM dan Yarn Package Manager

[cara install NPM / NodeJS](https://github.com/Dhino12/Javascript_Dasar/tree/master/62_NPM_Pengenalan)

## Command npm
| Command                     | Description                 | Common Options                    |
| --------------------------- | --------------------------- | --------------------------------- |
| init                        | Membuat berkas package.json pada project | [--force|-f|--yes|-y|--scope] |
| install <package-name>      | Memasang dan mendaftarkan package pada berkas package.jsonMemasang dan mendaftarkan package pada berkas package.jsonMemasang dan mendaftarkan package pada berkas package.json | [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run] |
| run-script <command>        | Menjalankan perintah yang terdapat pada objek scripts di berkas package.json | [--silent] [-- <args>...] |
| uninstall <package-name>    | Menghapus dan mengeluarkan package dari berkas package.json | [-S|--save|-D|--save-dev|-O|--save-optional|--no-save] |
| version                     | Untuk melihat versi package yang tersedia secara global atau lokal | [<newversion> / major / minor / patch / premajor / preminor / prepatch / prerelease [--preid=<prerelease-id>] / from-git] |
| node index.js               | untuk  menjalankan javascript | |
| npm -h                      | melihat seluruh command npm | |

