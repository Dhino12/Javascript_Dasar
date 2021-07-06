$.ajax({
    url:'http://www.omdbapi.com/?apikey=2d5c9328&s=naruto',
    success: movies => console.log(movies)
})

// ======= Vanila JavaScript ====== 
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.status === 200){
        console.log("=========== Vanila Javascript ============")
        if(xhr.readyState === 4){
            console.log(JSON.parse(xhr.response));
        }
    }else{
        console.log(xhr.responseText);
    }
}

xhr.open('get','http://www.omdbapi.com/?apikey=2d5c9328&s=Is the Order a Rabbit?: Dear My Sister')
xhr.send();

// --------- Simple --------------
console.log("---------- Simple Promise ------------");
const movies = fetch('http://www.omdbapi.com/?apikey=2d5c9328&s=naruto')
.then(response => response.json())
.then(response => console.log(response))

console.log(movies);
