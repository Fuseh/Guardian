import { Constants } from "discord.js";
import { keys } from "../config.js";
import { Event } from "../Event.js";
import { important } from "../utils/Logger.js";
import { establish } from "../utils/mongo/establish.js";

export default class ReadyEvent extends Event {
    name = 'Ready'
    event = Constants.Events.CLIENT_READY
    async run() {
        important('Guardian is online.')
        establish(keys.mongo)
    }
};
