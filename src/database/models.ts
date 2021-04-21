import database from './database'

export class UserModel {

    public createUser = async (username: string):Promise<any> => {

        var sql = `INSERT INTO users (name) VALUES (\'${username}\')`;

        await database.query(sql,  (err: any, result: any) => {
          if (err) throw err;
          console.log("1 record inserted", result);
        });
    }
}

interface room {
    name: string,
    madeby: string,
    key: number
}   

export class Rooms {
    public createRoom = async(body: room) => {

    }
}

