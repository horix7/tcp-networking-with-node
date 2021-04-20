import net from 'net'

let server = net.createServer( connection => {
    console.log("connection made ...")
    connection.on("data", data => {
        // run this when data is received
        console.log(data.toString()); // prints the data

    });
})

server.listen(5000, () => {
    console.log("server listening to port")
})

