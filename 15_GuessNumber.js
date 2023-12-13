const prompt=require('prompt-sync')()
let a=Math.floor((Math.random()*100)+1)
let b=prompt("Guess a number between 1 to 100: ")
b=parseInt(b)
let ans=0
while(b!=a){
    if(b<a){
        console.log("Guessed number is small")
    }
    else if(b>a){
        console.log("Guessed number is large")
    }
    ans=ans+1
    b=prompt("Guess a number between 1 to 100: ")
}
console.log("You won in "+(ans+1)+" chances")