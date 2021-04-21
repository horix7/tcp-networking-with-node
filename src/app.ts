import net from 'net'
import { createUser } from './account/account'
import { createRoom } from './rooms/rooms'


let server = net.createServer( connection => {
    console.log("connection made ...")
    connection.on("data", data => {




        connection.write(data.toString())

    });
})

server.listen(5000, () => {
    console.log("server listening to port")
})

