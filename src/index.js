import { Client, Intents } from 'discord.js';
import { keys } from './config.js';

new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
}).login(keys.token);
