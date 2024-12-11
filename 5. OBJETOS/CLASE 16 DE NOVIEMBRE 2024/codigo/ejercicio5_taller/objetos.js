function contarUsuariosHabilitados(usuarios) {
    //variable contadora
    let habilitados = 0;
    for (let clave in usuarios) {
      if (usuarios[clave] === "habilitado") habilitados++;
    }
    return habilitados;
  }

  let usuarios = {
    183344: "habilitado",
    354625: "habilitado",
    6762442: "inhabilitado",
    88552: "inhabilitado",
    438276: "habilitado",
  };

  let numeroHabilitados = contarUsuariosHabilitados(usuarios);
  console.log("El número de habilitados es: ", numeroHabilitados);
  