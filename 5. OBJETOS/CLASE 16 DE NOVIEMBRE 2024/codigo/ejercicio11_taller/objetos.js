//objeto de continentes
let continentes = {
  america: ['Estados Unidos', 'Brasil', 'Canadá', 'Argentina', 'México'],
  asia: ['China', 'Japón', 'India', 'Corea del Sur', 'Indonesia'],
  africa: ['Nigeria', 'Egipto', 'Sudáfrica', 'Etiopía', 'Congo'],
  europa: ['Alemania', 'Francia', 'España', 'Italia', 'Reino Unido'],
  oceania: ['Australia', 'Nueva Zelanda', 'Papúa Nueva Guinea', 'Islas Salomón', 'Vanuatu']
}

function paises(continente) {
  let continenteSeleccionado = continentes[continente];
  continenteSeleccionado.forEach(element => {
    console.log(element);
  });
}

paises("america")