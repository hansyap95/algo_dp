const twoSum=(numbers,targetNum)=>{
  if(targetNum===0) return [];
  if(targetNum<0) return null;
  
  for(let num of numbers){
    
    const remain= targetNum-num;
    const newArr=numbers.filter(e=> e!==num)
    
    const store=twoSum(newArr,remain);
    if(store!=null){
      return [...store,num]
    }
  }
  return null;
}
console.log(twoSum([2,7,11,15],9))  //[0,1]
//console.log(twoSum([3,2,4],6))  