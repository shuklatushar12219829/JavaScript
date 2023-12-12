// 1St wat to declare method
function fibb(n){
    if(n==1 || n==0){
        return 1
    }
    else{
        return fibb(n-1)+fibb(n-2)
    }
}
const a=()=>{
    return "You are so handsome"
}
console.log(fibb(8))
console.log(a())