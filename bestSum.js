const bestSum=(targetSum,numbers,memo={})=>{
  if(targetSum in memo) return memo[targetSum];
  if(targetSum<0) return null;
  if(targetSum===0) return []

  let shortestCombination=null;

  for(let num of numbers){
    const remain=targetSum-num
    const store=bestSum(remain,numbers,memo)
    if(store!==null){
      const combination=[...store,num]
      if(shortestCombination===null || combination.length<shortestCombination.length){
       shortestCombination=combination;
      }
    }
  }
  memo[targetSum]=shortestCombination;
  return memo[targetSum]
  
}
console.log(bestSum(7,[5,3,4,7])) //[7]
console.log(bestSum(8,[2,3,5]))  //[3,5]
console.log(bestSum(8,[1,4,5])) //[3,4]
console.log(bestSum(100,[1,2,3,25]))   // [25,25,25,25]
