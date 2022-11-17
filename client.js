// This has to stay here for the reference in code
const net = require("net");
// function that connects to server, server port entered
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //notifies connection has been made and adds name to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: AKA");
  });

  //consoles communication from server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
}
module.exports = {
  connect,
}

// changing to ES6 shorthand

