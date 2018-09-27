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

let simpleImpl=getSimpleMn(base);
let baseNumber=simpleImpl[simpleImpl.length-1];
let res=0;
let prom=0;

for(let i=1;i<=number;i++){
  prom=i;
  while(prom%baseNumber==0){
    prom=prom/baseNumber;
    res++;
  }
}
return res;
}