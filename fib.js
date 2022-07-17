const fib=(number,memo={})=>{
  if(number in memo) return memo[number]
  if(number<3) return 1;
  
  memo[number]=fib(number-2,memo)+fib(number-1,memo)
  return memo[number]

}



console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(50))