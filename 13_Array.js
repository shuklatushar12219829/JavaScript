const compare=(a,b)=>{
    return a-b
}
const fruit=["banana","apple","mango"]
const a=[true,"qwerty",12232]
console.log(a[0])
let d=[51,432,23,34,13,212,233,335,17,3215,34,23,22]
console.log(d.toString())
console.log(d.join("-"))
console.log(d.pop())
console.log(d.push(1233))
console.log(d.shift())
console.log(d.unshift(2))
delete d[3]
console.log(d)
console.log(d.sort(compare))