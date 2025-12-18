function factorielle(n) {
    if (n === 0) return 1;
    return n * factorielle(n - 1);
}

console.log("Factorielle de 5 :", factorielle(5));
