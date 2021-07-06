// cookie
document.cookie = "username = Joko";

// add cookie
document.cookie = "username = John Doe; expires = Thu, 18 Dec 2013 12:00:00 UTC; path = /";

// show cookie
console.log(document.cookie)

// change cookie
document.cookie = "username = Joko; expires = Thu, 18 Dec 2013 12:00:00 UTC; path = /";

// delete cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// https://www.w3schools.com/js/js_cookies.asp