## Install Package
**Local**
umumnya package akan diinstall pada direktori local / folder yang sama dengan project kita  <br>
`npm install <package-name>` <br><br>
atau 
`npm i <package-name>` <br><br>
atau 
`npm add <package-name>` <br><br>

**Global**
Global akan dipasang di satu tempat pada sistem perangkat kita <br>
`npm install -g <package-name>`<br><br>

**devDependencies**
devDependencies digunakan untuk package yang berkaitan ketika proses pengembangan contoh seperti package test / jest, ia tidak dibutuhkan ketika aplikasi sudah dirilis 
`npm install <package-name> --save-dev`<br><br>

## Uninstall Package

`npm uninstall <package-name>` <br><br>

**devDependencies**
`npm uninstall <package-name> --save-dev`<br><br>

**help uninstall**
`npm uninstall -h`<br><br>