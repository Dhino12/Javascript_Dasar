//Global Scope |Window Scope
var a = 1;

function tes() {
    var a = 2;
    //Menimpa diwindow
    a = 3
    console.log(window.a);
    console.log(a);
}
tes();
console.log(a);