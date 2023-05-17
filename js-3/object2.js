const Persona = {
  nombre: "Cristian",
  edad: 23,
  ciudad: "Armenia",
  profesion: "Programador",
};

console.log(Persona);

const presentacion = (obj) =>
  `Me llamo ${obj.nombre} tengo ${obj.edad} años, vivo en la ciudad de ${obj.ciudad} y soy ${obj.profesion}`;

const mensaje = presentacion(Persona);

console.log(mensaje);

Persona["hobbies"] = ["programar", "leer", "cantar"];

console.log(Persona.hobbies);

for (let i = 0; i < Persona.hobbies.length; i++) {
  console.log(Persona.hobbies[i]);
}
