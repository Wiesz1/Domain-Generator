/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "my", "their"];
  let adj = ["great", "big", "small", "tall"];
  let noun = ["jogger", "racoon", "dog", "cat"];
  let ending = [".com", ".net", ".io", ".org"];

  for (let i = 0; i < 10; i++) {
    let pronounindex = Math.floor(Math.random() * pronoun.length);
    let adjindex = Math.floor(Math.random() * adj.length);
    let nounindex = Math.floor(Math.random() * noun.length);
    let endingindex = Math.floor(Math.random() * ending.length);

    let sentence =
      pronoun[pronounindex] +
      adj[adjindex] +
      noun[nounindex] +
      ending[endingindex];

    document.getElementById(i).innerHTML = sentence;
  }
};
