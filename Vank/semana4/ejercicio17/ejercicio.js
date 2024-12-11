function encontrarConsecutivos() {
  let arr17 = [5, 7, 90, 2, 5, 3, 8, 99];
  arr17.forEach((a) => {
    arr17.forEach((b) => {
      if (a + 1 === b) {
        console.log(a, "y", b, "son consecutivos");
      }
    });
  });
}
encontrarConsecutivos();
