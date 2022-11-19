// Stores the active TCP connection as global object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  return stdin;
};
//function to take input from keyboard and send it to stdin
const handleUserInput = function(data) {
  // \u0003 maps to ctrl+c input, keyboard keycodes
  if (data === '\u0003') {
    process.exit();
  };
  if (data === "w") {
    console.log("Moved up");
    connection.write("Move: up");  
  };
  if (data === "a") {
    connection.write("Move: left");
    console.log("Moved left");
  };
  if (data === "s") { 
    connection.write("Move: down");
    console.log("Moved down");
  };
  if (data === "d") {
    connection.write("Move: right");
    console.log("Moved right");
  };
  if (data === "g") {
    connection.write("Say: Oh no!")
  };
  if (data === "t") {
    connection.write("Say: Blimey!")
  };
  if (data === "v") {
    connection.write("Say: Eeexceleeent!")
  };
};


module.exports = {
  setupInput,
};