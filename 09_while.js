const prompt=require("prompt-sync")();
let a=prompt("Enter a number: ")
a=parseInt(a)
while(a>0){
    console.log(a)
    a--
}