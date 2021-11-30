import 'reflect-metadata';
import readdirp from 'readdirp';
import { URL, fileURLToPath, pathToFileURL } from 'url';
import { Client, Intents } from 'discord.js';
import { keys } from './config.js';
import { container } from 'tsyringe';


// Learnt this from Crawl
const events = readdirp(fileURLToPath(new URL('./events', import.meta.url)));

for await (const per of events) {
    const resolved = container.resolve((await import(pathToFileURL(per.fullPath).href)).default);
    resolved.run()
};

new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
}).login(keys.token);
