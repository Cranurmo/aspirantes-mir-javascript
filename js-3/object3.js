const Receta = {};

Receta["nombre"] = "Sandwich";
Receta["ingredientes"] = [];
const obj = { nombre: "pan", cantidad: 2 };
Receta.ingredientes.push(obj);
console.log(Receta);
const obj2 = { nombre: "queso", cantidad: 1 };
Receta.ingredientes.push(obj2);
console.log(Receta.ingredientes[0].nombre);
let cantidad = 0;
for (let i = 0; i < Receta.ingredientes.length; i++) {
  cantidad += Receta.ingredientes[i].cantidad;
}
console.log(cantidad);
