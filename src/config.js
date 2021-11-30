import { config } from "dotenv";

config();
export const keys = {
    token: process.env.TOKEN,
    mongo: process.env.MONGO
};

