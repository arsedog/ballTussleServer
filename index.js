const { PeerServer} = require("peer");

const PORT = 9002;

const peerServer = PeerServer({
    port: PORT,
    key: "demodemo",
    path: "/myapp",
    allow_discovery: true,
});

peerServer.on("connection", c =>{
    console.log("Connection ID:", c.id);
})

peerServer.on("disconnect", c =>{
    console.log("disconnect!", c.id);
})

console.log(`Running peerjs server on port ${PORT}`);