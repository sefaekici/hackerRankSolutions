"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
  var text = "";
  var space = "";
  for (var i = 1; i <= n; i++) {
    for (var j = n - i; j >= 1; j--) {
      space = space + " ";
    }

    for (var c = 1; c <= i; c++) {
      text = text + "#";
    }

    console.log(space + text);

    text = "";
    space = "";
  }
}

function main() {
  const n = parseInt(readLine(), 10);

  staircase(n);
}
