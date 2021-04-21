import net from 'net'
import { createUser } from './account/account'
import { createRoom } from './rooms/rooms'

let server = net.createServer( connection => {
    console.log("connection made ...")
    connection.on("data", data => {

        let command = data.toString().split(":")[1]
        
        console.log("------------------------->", command)

        switch (command) {
            case "login":
                connection.write(data.toString())
                createUser("newuser")
                break;
        
            default:
                createUser("newuser")

                break;
        }


    });
})

server.listen(5000, () => {
    console.log("server listening to port")
})

