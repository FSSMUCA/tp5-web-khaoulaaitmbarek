function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let totalHT = Number(prompt("Entrez le total HT :"));
let remise = Number(prompt("Entrez le pourcentage de remise :"));

console.log("Total après remise :", totalAvecRemise(totalHT, remise));
