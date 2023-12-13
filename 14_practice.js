const prompt=require('prompt-sync')();
// let a=[]
// for(let i=0;i<5;i++){
//      a[i]=prompt("Enter number")
// }
// console.log(a)
let b=[]
let c=1
let i=0;
while(c!=0){
    b[i]=prompt("enter number: ")
    c=b[i]
    i++;
}
console.log(b)