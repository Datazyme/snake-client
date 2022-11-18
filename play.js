// using ES6 shorthand with "connect" being the entire function in client.js
console.log("Connecting ...");
const {connect} = require("./client.js")
connect();

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(data) {
  // \u0003 maps to ctrl+c input
  if (data === '\u0003') {
   process.exit();
  }
};
setupInput();
