function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        count++;
      }
    }
    return count;
  }
  
  console.log("Start");
  setTimeout(() => {
    let start = performance.now();
    for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
    }
    let end = performance.now();
    console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);
  }, 0);
  console.log("End");
  