const gridTraveller = (m,n,memo={}) => {
  const record= m + ',' + n;

  if(record in memo) return memo[record]
  if(m===0 || n===0) return null;
  if(m===1 && n===1) return 1;

  memo[record]=gridTraveller(m-1,n,memo)+gridTraveller(m,n-1,memo)
  return memo[record]
}

console.log(gridTraveller(1,1))  //1
console.log(gridTraveller(2,3))  //3
console.log(gridTraveller(3,2))  //3
console.log(gridTraveller(3,3))  //6
console.log(gridTraveller(18,18)) ///2336