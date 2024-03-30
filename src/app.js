/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const who = ["My cat", "My friend", "The cleaner", "The software"];
  const action = ["erased", "corrupted", "overlooked", "sabotaged"];
  const what = [
    "the presentation",
    "the slides",
    "the visuals",
    "the handouts"
  ];
  const when = [
    "during the storm",
    "amidst the power outage",
    "in the middle of maintenance",
    "while I was distracted"
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
