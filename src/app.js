/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //defino arrays
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  //hago funcion que genera random index condicionado a largo de array que entra como parametro del a funcion y devuelve el contenido del array basado en el random index generado
  function rand(arr) {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
  }
  //genero variables para palos y numeros usando la funcion rand
  let randomPalos = rand(palos);
  let randomNumeros = rand(numeros);

  //obtebgo el espacio del html para inyectar las variables de palo y numero
  let selectTop = document.querySelector("#palo-top");
  let selectBody = document.querySelector("#number");
  let selectBottom = document.querySelector("#palo-bottom");

  //aplico colores segun palo seleccionado en la funcion rand
  if (randomPalos === "♦" || randomPalos === "♥") {
    selectTop.style.color = "red";
    selectBottom.style.color = "red";
  }

  selectTop.innerHTML = randomPalos;
  selectBody.innerHTML = randomNumeros;
  selectBottom.innerHTML = randomPalos;
};
