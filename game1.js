var userScore=document.getElementById("user-score").innerText
var compScore=document.getElementById("comp-score").innerText
var scoreboard_div=document.querySelector(".score-board")
var result_div=document.querySelector(".result > p")
var rock_div=document.getElementById("r");
var ppr_div=document.getElementById("p");
var scissors_div=document.getElementById("s");

function getCompChoice(){
    var choices=['r','p','s']
    var randomNo=(Math.floor(Math.random()*3))
    return choices[randomNo];
}

function convert(letter){
    if(letter==='r')
     return "Rock"
     if(letter ==='s')
     return "Scissors"
     if(letter==='p')
     return "Paper"
}
function win(user,comp){
    userScore++;
    document.getElementById("user-score").innerText=userScore
    var smallUserWrd="User".fontsize(3).sub();
    var smallCompWrd="Comp".fontsize(3).sub();
    result_div.innerHTML= convert(user)+smallUserWrd+" beats "+convert(comp)+smallCompWrd+" You win !"
    document.getElementById(user).classList.add("green-glow")
    setTimeout(function(){ document.getElementById(user).classList.remove("green-glow")},300)
}
function lose(user,comp){
    compScore++;
    document.getElementById("comp-score").innerText=compScore;
    var smallUserWrd="User".fontsize(3).sub();
    var smallCompWrd="Comp".fontsize(3).sub();
    result_div.innerHTML= convert(user)+smallUserWrd+" loses to "+convert(comp)+smallCompWrd+" You lose..."
    document.getElementById(user).classList.add("red-glow")
    setTimeout(function(){ document.getElementById(user).classList.remove("red-glow")},300)
}
function draw(user,comp){
    result_div.innerHTML="It's a draw"
    document.getElementById(user).classList.add("gray-glow")
    setTimeout(function(){ document.getElementById(user).classList.remove("gray-glow")},300)
}

function game(userChoice){
    var compChoice=getCompChoice();
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,compChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice)
            break;
    }
}

function main(){
rock_div.addEventListener('click',function(){
    game("r")
})
ppr_div.addEventListener('click',function(){
    game("p")
})
scissors_div.addEventListener('click',function(){
    game("s")
})
}
main();