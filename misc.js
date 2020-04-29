function listPrime(upto) {
  for (let limit = 1; limit <= upto; limit++) {
    let a = false;
    for (let i = 2; i <= limit; i++) {
      if (limit % i === 0 && i !== limit) {
        a = true;
      }
    }
    if (a === false) {
      console.log(limit);
    }
  }
}
