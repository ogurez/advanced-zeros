module.exports = function getZerosCount(number, base) {

  function getSimpleMn(num){
    let arr = [];
    if(num > 0 && num != 1){
      for(let i = 2; i <= num; i++){
        while(num % i == 0 && num > 1){
          arr.push(i);
          num = num / i;
        }

        if(num/i == 1){
        arr.push(num);
        }
      }
      return arr;
    }
}
let arr=getSimpleMn(base);

let counter=0;
let arrNew=[];

for(let i=0; i<arr.length; i++){
  if(arr[i]==arr[i+1]){
    counter++;
  }
  else{
    counter++;
    arrNew.push(counter);
    counter=0;
  }
}

let prostMn=[];

for(let i=0; i<arr.length; i++){
  if(arr[i]==arr[i+1]){
    continue;
  }
  else{
    let counterMn=0;
    let temp=number;

    while((temp/arr[i])>0){
      counterMn +=Math.floor(temp/arr[i]);
      temp=Math.floor(temp/arr[i]);
    }
    prostMn.push(counterMn);
  }
}

let counterZeros=0;
for(let i=0;i<prostMn.length;i++){
  prostMn[i]=Math.floor(prostMn[i]/arrNew[i]);
}
counterZeros=Math.min.apply(null,prostMn);

return counterZeros;

}