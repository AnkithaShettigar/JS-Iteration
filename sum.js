
const findSum = (n) => {
    let sum=0;
    for(let i=2;i<=n;i=i+2)
    {
      
      sum=sum+i;
    }
    return sum;
  };