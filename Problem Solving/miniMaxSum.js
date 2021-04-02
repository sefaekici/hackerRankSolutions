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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  arr.sort();
  var minValue = arr[0];
  var maxValue = arr[arr.length - 1];
  let maxCalculated = 0,
    minCalculated = 0;

  //max value calculated
  for (var i = 1; i <= arr.length - 1; i++) {
    maxCalculated = maxCalculated + arr[i];
  }
  //min value calculated
  for (var i = 0; i <= arr.length - 2; i++) {
    minCalculated = minCalculated + arr[i];
  }

  console.log(minCalculated, maxCalculated);
}

function main() {
  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
