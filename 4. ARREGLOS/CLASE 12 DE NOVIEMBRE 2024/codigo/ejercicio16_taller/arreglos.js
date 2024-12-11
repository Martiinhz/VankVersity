const cadenaConMasTimina = (arr) =>{
    return arr.reduce((maxCadena, cadena) => {
      const contarT = (str) => [...str].filter(letra => letra === 'T').length; 
      return contarT(cadena) > contarT(maxCadena) ? cadena : maxCadena;
    });
  }
  const adnCadenas = ["AACCGT", "TTTTGGTA", "GGGGG", "CCCGTAAA"];
  console.log(cadenaConMasTimina(adnCadenas));