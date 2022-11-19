// Stores the active TCP connection object.
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
  }
  if (data === '\u0077') {
      console.log("Moved up");
      connection.write("Move: up");  
  }
  if (data === "a") {
    connection.write("Move: left");
    console.log("Moved left");
  }
  if (data === "s") { 
    connection.write("Move: down");
    console.log("Moved down");
  }
  if (data === "d") {
    connection.write("Move: right");
    console.log("Moved right");
  };
};


module.exports = {
  setupInput,
};