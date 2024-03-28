/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // Desarrollo de la solución
  function getRandom() {
    const whoRandom = Math.floor(Math.random() * 4);
    // console.log(whoRandom)
    return whoRandom;
  }

  who[getRandom()];
  action[getRandom()];
  what[getRandom()];
  when[getRandom()];

  // output

  const excuse =
    who[getRandom()] +
    " " +
    action[getRandom()] +
    " " +
    what[getRandom()] +
    " " +
    when[getRandom()];

  console.log("Esta es excusa", excuse);

  // Obtener el elemento por su ID
  const elemento = document.getElementById("excuse");

  // Hacer algo con el elemento, por ejemplo cambiar su contenido
  elemento.innerHTML = excuse;
};
