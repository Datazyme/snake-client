// using ES6 shorthand with "connect" being the entire function in client.js
const {connect} = require("./client.js");
//called from input.js, function that takes in user input and sends to server 
const {setupInput} = require("./input.js");

console.log("Connecting ...");

//calls connect from client.js into setupInput from input.js
setupInput(connect());