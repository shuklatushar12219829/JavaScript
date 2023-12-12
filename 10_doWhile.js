const prompt=require("prompt-sync")();
let a=prompt("Enter a number: ")
a=parseInt(a)
do{
    console.log(a)
    a--;
}while(a>0)