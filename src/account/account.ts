import { UserModel } from "../database/models";

const User = new UserModel()
export const createUser = async (username: string) => {
    const new_user = await  User.createUser(username)

    return new_user
}
