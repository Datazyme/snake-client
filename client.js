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

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
}
module.exports = {
  connect,
}

// changing to ES6 shorthand

