function countPrimeNumbers() {
    let startTime = performance.now();
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      let isprime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isprime = false;
          break;
        }
      }
      if (isprime) {
        count++;
      }
    }
    let endTime = performance.now()
    console.log(`The number of prime numbers from 2 to 100 is ${count}`)
    console.log(`Execution time: ${endTime - startTime} milliseconds`)
  }
  countPrimeNumbers();
  