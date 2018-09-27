module.exports = function getZerosCount(number,base) {
    
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
    let simples=0;
    let newSimpleImpl=[];

    for(let i=0;i<simpleImpl.length;i++){
        if(simpleImpl[i]==simpleImpl[i+1]){
            simples +=simpleImpl[i];
        }
        else{
            simples +=simpleImpl[i];
            newSimpleImpl.push(simples);
            simples=0;
        }
    }

    newSimpleImpl.sort(function(a, b) {
        return a - b;});

    let baseNumber=newSimpleImpl[newSimpleImpl.length-1];
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