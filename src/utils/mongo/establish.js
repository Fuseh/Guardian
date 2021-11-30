import mongoose from 'mongoose';
import { error, important } from "../Logger.js";

export async function establish(uri) {
    mongoose.connect(uri, {
        useNewUrlParser     : true,
        useUnifiedTopology  : true,
    })
    .catch(err => error(err));
    
    mongoose.connection.on('connected', () => {
        important('Connected to Mongo');
    });
};


