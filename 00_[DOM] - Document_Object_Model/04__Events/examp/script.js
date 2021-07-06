function welcome() {
    alert("Memunculkan element HTML ! ")
    const contents = document.querySelector(".contents");
    contents.removeAttribute("hidden");
}

function increment(){
    document.getElementById("count").innerText++;
    
    if(document.getElementById("count").innerText == 7){
        const hiddenMessage = document.createElement("h4");
        hiddenMessage.innerText = "Selamat Anda menemukan Hadiah tersembunyi >__<"
        
        const image = document.createElement("img");
        image.setAttribute("src", "https://i.pinimg.com/originals/6b/74/ac/6b74ac643966cf7e1beeb68e089a881d.jpg");
        
        const contents = document.querySelector(".contents");
        contents.appendChild(hiddenMessage).appendChild(image);
    }
}

// event handle 
// document.body.onload = welcome

// document.getElementById("incrementButton").onclick = increment;

// dengan addEventListener
window.addEventListener("load", welcome);

document.getElementById("incrementButton").addEventListener("click", increment);