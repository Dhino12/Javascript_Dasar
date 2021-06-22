console.log("Page location is: " + window.location.href);
console.log("Page hostname is: " + window.location.hostname);
console.log("Page path is: " + window.location.pathname);
console.log("Page protocol is: " + window.location.protocol);
console.log("Page port is: " + window.location.port);
console.log(" Assign load halaman web ");

let message = prompt("load halaman google ? ");
if(message === "ya" || message == "yes"){
    window.location.assign("www.google.com");
}
