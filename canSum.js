const canSum=(targetSum,number,memo={})=>{
  if(targetSum in memo) return memo[targetSum]
  if(targetSum===0) return true
  if(targetSum<0) return false

  for(let num of number){
    const remain=targetSum-num
    memo[remain]=canSum(remain,number,memo)
    if(memo[remain]===true){
      return true
    }
  }
  memo[targetSum]=false
  return false
}
console.log(canSum(7,[2,3])) //true
console.log(canSum(7,[5,3,4,7])) //true
console.log(canSum(7,[2,4])) //false
console.log(canSum(7,[2,3,5])) //true
console.log(canSum(300,[7,14])) 