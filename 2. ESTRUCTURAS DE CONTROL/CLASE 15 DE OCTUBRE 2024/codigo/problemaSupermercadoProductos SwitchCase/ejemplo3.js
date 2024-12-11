// let sisben = prompt("Ingrese su sisben del 1 - 5: ");

// switch (sisben) {
//   case "1":
//     alert(`Su nivel es ${sisben} y tiene subsidio`);
//     break;
//   case "2":
//     alert(`Su nivel es ${sisben} y tiene subsidio`);
//     break;
//   case "3":
//     alert(`Su nivel es ${sisben} y tiene subsidio`);
//     break;
//   case "4":
//     alert(`Su nivel es ${sisben} y no tiene subsidio`);
//     break;
//   case "5":
//     alert(`Su nivel es ${sisben} y no tiene subsidio`);
//     break;
//   default:
//     alert('')
//     break;
// }


let producto = prompt("Ingrese el producto que desea adquirir, lentejas, crema, arroz y vino: ");

switch (producto) {
  case "lentejas":
    alert(`Ud desea adquirir "${producto}" y dicho producto no paga IVA`);
    break;
  case "arroz":
    alert(`Ud desea adquirir "${producto}" y dicho producto no paga IVA`);
    break;
  case "crema":
    alert(`Ud desea adquirir "${producto}" y dicho producto paga IVA`);
    break;
  case "vino":
    alert(`Ud desea adquirir "${producto}" y dicho producto paga IVA`);
    break;
  default:
    alert('Ingrese un producto valido')
    break;
}
