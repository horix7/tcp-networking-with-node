import { Rooms } from "../database/models";

const room = new Rooms()

export const createUser = async (body: any) => {
    const new_room = await  room.createRoom(body)

    return new_room
}

