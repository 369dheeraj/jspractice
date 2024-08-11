fruits ={orange:5, apple:6, banana:12}
const list = Object.values(fruits);
console.log(`Array ${list}`)

for([item,qty] of Object.entries(fruits)){
    console.log(`fruit name ${item} and qty=${qty}`)
}

for(let[item,qty] of Object.entries(fruits)){
    console.log(item,qty)
}
console.log(`Without json ${fruits}`)
console.log(`JSON method ${JSON.stringify(fruits)}`)