import net from 'net'
import { createUser } from './account/account'
import { createRoom } from './rooms/rooms'
import prompt from 'prompt'


let server = net.createServer( connection => {
    connection.write(connection.remoteFamily + " " +connection.remoteAddress+ ":" + connection.remotePort)
    connection.write("\nprovide your user name to continue: ")

    connection.on("data", (data: any) => {
        const command = data.toString()
        console.log(command)

    });
})

server.listen(5000, () => {
    console.log("server listening to port 5000")
})

