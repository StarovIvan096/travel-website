let serachNum = 10;
let sumNumber = 0;
let arr = [];

for(let i = 10; i <99; i++){
    if(serachNum.toString()[0] !== serachNum.toString()[1]){
        arr.push(serachNum)
        sumNumber = sumNumber + (serachNum * serachNum);
    }
    serachNum++;
}
console.log(arr);
console.log(sumNumber);