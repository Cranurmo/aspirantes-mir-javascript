const Pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};

// console.log(Pedro.edad);

Pedro["estatura"] = 1.8;
// console.log(Pedro);

delete Pedro.activo;
// console.log(Pedro);

for (i in Pedro) {
  console.log(i + " : " + Pedro[i]);
}

Pedro["saluda"] = function saluda() {
  return `Hola me llamo ${this.nombre}`;
};

console.log(Pedro.saluda());
