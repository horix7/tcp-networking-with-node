import net from 'net'
import { createUser } from './account/account'
import { createRoom } from './rooms/rooms'
import prompt from 'prompt'


let server = net.createServer( connection => {
    createUser(connection.remoteFamily + " " +connection.remoteAddress+ ":" + connection.remotePort)
    connection.write("connected as: " +  connection.remoteFamily + " " +connection.remoteAddress+ ":" + connection.remotePort)
    connection.write("\nprovide room key to connect: ")

    connection.on("data", async (data: any) => {
        const command = data.toString()
        await createRoom({
            name: data.toString(),
            madeby: connection.remoteFamily + " " +connection.remoteAddress+ ":" + connection.remotePort
        })

        connection.write("room was made successfully")

    });
})

server.listen(5000, () => {
    console.log("server listening to port 5000")
})

