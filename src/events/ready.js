import { Constants } from "discord.js";
import { Event } from "../Event.js";

export default class ReadyEvent extends Event {
    name = 'Ready'
    event = Constants.Events.CLIENT_READY
    async run() {
        
    }
};
