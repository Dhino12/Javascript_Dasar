## Install Package
**Local** <br>
umumnya package akan diinstall pada direktori local / folder yang sama dengan project kita  <br>
`npm install <package-name>` <br><br>
atau <br>
`npm i <package-name>` <br><br>
atau <br>
`npm add <package-name>` <br><br>

**Global** <br>
Global akan dipasang di satu tempat pada sistem perangkat kita <br>
`npm install -g <package-name>`<br><br>

**devDependencies** <br>
devDependencies digunakan untuk package yang berkaitan ketika proses pengembangan contoh seperti package test / jest, ia tidak dibutuhkan ketika aplikasi sudah dirilis 
`npm install <package-name> --save-dev`<br><br>

## Uninstall Package

`npm uninstall <package-name>` <br><br>

**devDependencies** <br>
`npm uninstall <package-name> --save-dev`<br><br>

**help uninstall** <br>
`npm uninstall -h`<br><br>