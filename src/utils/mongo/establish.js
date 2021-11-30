import { connect, connection } from "mongoose";
import { important } from "../Logger.js";

export async function _establish(uri) {
    await connect(uri);
    connection.on('open', () => {
       important('Established a connection with MongoDB'); 
    });
};


