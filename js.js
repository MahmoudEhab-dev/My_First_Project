let parts = {
    
}
let body = document.body;
let loading = document.getElementById("loading");
let bar = document.getElementById("bar-loading");
let text = document.getElementById("text-loading");
let span = document.getElementById("percent");
let game = document.getElementById("game");
let options = document.getElementById("options");
let start_btn = document.getElementById("start-button");
let start = document.getElementById("start");
let keyletters = document.getElementById("keyletters");
let gusee = document.getElementById("gusee");
let screen = document.getElementById("screen");
let rules = document.getElementById("rules");
let btn = document.getElementById("btn");
words = ["loading","loading.","loading..","loading..."]
i = 0;
k = 0;
g = 0;
let so = setInterval(function(){
    if (i < 4 && span.innerHTML != "100%"){
        text.innerText = words[i];
        i++;
    }
    else if (i == 4 && span.innerHTML != "100%"){
        i = 0;
    }
    else{
        clearInterval(so)
        text.innerHTML = "compleated"
    }
},750);

const co = setInterval(function(){
   
    if(k != 100){
      k += 10;
      bar.style.backgroundImage = `linear-gradient(90deg,black 0% ${k}%, transparent ${k}% 100%)`;
      span.innerHTML = `${k}%`
    }
    else if (k == 100){
        clearInterval(co)
    }
},1000)
let to = setInterval(function(){
    if(text.innerHTML == "compleated"){
        loading.style.opacity = "0"
        setTimeout(function(){
            loading.style.display = "none";
            game.style.display = "flex"
            game.style.justifyContent = "center";
            game.style.alignItems = "center";
            game.style.height = "100%"
            keyletters.style.display = "none";
            gusee.style.display = "none";
            screen.style.display = "none"; 
        },500)
        clearInterval(to)
    }
},1000)
btn.onclick = function(){
    this.style.transform = "scale(0,0)"
    
}
btn.onclick = function(){
    rules.style.opacity = "0";
    btn.style.transform = "scale(0,0)";
    setTimeout(function(){
        rules.style.display = "none";
        btn.style.display = "none";
        start_btn.style.display = "none";
    },750)
    setTimeout(function(){
        start.style.height = "35%";
        start_btn.style.display = "none";
        rules.style.display = "inline-block";
    },1000)
    setTimeout(function(){
        rules.style.opacity = "1";
        options.style.width = "70%";
        screen.style.width = "30%";
        screen.style.display = "inline-block";
    },1200)
}