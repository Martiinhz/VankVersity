function cadenaConMasT() {
  let adn = ["ATCG", "TTTT", "AGGT", "ACTT"];
  let maxT = "";
  let maxCount = 0;

  adn.forEach((cadena) => {
    let count = (cadena.match(/T/g) || []).length;
    if (count > maxCount) {
      maxT = cadena;
      maxCount = count;
    }
  });

  console.log("Mayor cadena con T:", maxT);
}
cadenaConMasT();
