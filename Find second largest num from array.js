let arry = [20,19,65,73,93]

const findsecondlargestnum =(arry) => {
    let firstlargestnum = 0;
    let secondlargestnum = 0;
    if(!Array.isArray(arry))  return "invalid input" ;
    for(let i=0;i<arry.length;i++){
        if(arry[i] > firstlargestnum)
        {
            secondlargestnum = firstlargestnum
            firstlargestnum = arry[i]
        }else if(arry[i] > secondlargestnum && arry[i] !== secondlargestnum ){
            secondlargestnum = arry[i];
        }
    }
    return secondlargestnum
}

console.log(findsecondlargestnum(arry))
