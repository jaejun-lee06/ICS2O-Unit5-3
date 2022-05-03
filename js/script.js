// Created by: Jaejun Lee
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * This function determines if an integer is negative or positive.
 */
function myButtonClicked() {
  const userInteger = parseInt(document.getElementById("age").value);
  if (userInteger >= 17) {
    document.getElementById("answer").innerHTML =
      "You can see an R movie alone.";
  }
  else if (userInteger >= 13) {
    document.getElementById("answer").innerHTML =
      "You can see an PG-13 movie alone.";
  }
  else if (userInteger >= 5) {
    document.getElementById("answer").innerHTML =
      "You can see a G or PG movie alone.";
  }
  else {
    document.getElementById("answer").innerHTML =
      "Uh, you're too young for most things.";
  }
}

