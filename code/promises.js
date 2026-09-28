console.log("Empezando clase de promesas");

/*Declarando una promesa:
Recibirá siempre dos funciones que las hemos llamado así,
porque la primera se ejecutará cuando la promesa termine "bien" y la segunda 
se ejecutará cuando acabe "mal".
*/
// let p = new Promise((resolve, reject) => {
//   console.log("Ejecutando mi promesa numero 1");
//   setTimeout(() => {
//     reject(
//       "La promesa numero 1 NO se ha resuelto correctamente después de 3 segundos y medio.",
//     );
//   }, 3500);
// });

// let p2 = new Promise((resolve, reject) => {
//   console.log("Ejecutando mi promesa 2");
//   setTimeout(() => {
//     resolve(
//       "La promesa numero 2 se ha resuelto correctamente al esperar 8 segundos.",
//     );
//   }, 8000);
// });

// let p3 = new Promise((resolve, reject) => {
//   reject("La promesa numero 3 NO se ha resuelto de manera satisfactoria.");
// });

/*
Aquí vemos trés metodos que tiene la clase "Promesas" para poder capturar sus estados:
then: se ejecuta cuando la promesa se resuelve
catch: Se ejecuta cuando la promesa es rechazada
finally: Se ejecuta siempre, tanto si se resuelte como si es rechzada.

*/

// p2.then(
//   (resuelto) => {
//     console.log(resuelto);
//   },
//   (promesaerror) => {
//     console.log("Error: ", promesaerror);
//   },
// );

// p.then((valor) => {
//   console.log("La primera promesa ha devuelvo: ", valor);
//   return p2;
// })
//   .then((valor2) => {
//     console.log("Este es el segundo then: ", valor2);
//     return p3;
//   })
//   .then((valor3) => {
//     console.log("Esto es el tercer then: ", valor3);
//     return valor3;
//   })
//   .catch((error) => {
//     console.log("Ha ocurrido un error: ", error);
//   })
//   .finally(() => {
//     console.log("Ejecutando finally");
//   });

// Métodos estáticos
// ¿Qué ocurre cuando queremos rechazar una promesa manualmente?

let pp = new Promise((resolve, reject) => {
  resolve(19);
});

let pp2 = new Promise((resolve, reject) => {
  console.log("Generando clave");
  setTimeout(() => {
    resolve("fjyukjfhg34");
  }, 5000);
});

pp.then((edad) => {
  if (edad >= 18) {
    console.log("Acceso autorizado");
    return pp2;
  } else {
    return Promise.reject("Edad menor que 18 años");
  }
})
  .then((clave) => {
    console.log("Tu clave es: ", clave);
  })
  .catch((e) => {
    console.log("Ha ocurrido el siguiente error: ", e);
  })
  .finally(() => {
    console.log("Cerrando la conexión");
  });
