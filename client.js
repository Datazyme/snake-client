// This has to stay here for the reference in code
const net = require("net");
//calls from constants.js
const { host, port } = require("./constants");
// function that connects to server, server port entered
const connect = function () {
  //must name it host and port for below function to work, IP and PORT does not work
  const conn = net.createConnection({
    host, 
    port, 
  });
 
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //notifies connection has been made and adds name to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
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
};

          


