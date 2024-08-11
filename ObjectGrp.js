const fruits = [
    {name:'orange', qty:20},
    {name:'banana', qty:10}
]

function group(qty){
    return qty>15 ? 'low': 'high';
}

const result= Object.groupBy(fruits,group);

for(let [x,y] of result.low.entries()){
    console.log(x,y);
}