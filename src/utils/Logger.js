import { bold, red, cyanBright, yellow } from "colorette";

export function error(message) {
    return console.log(bold(red(`${message}`)));    
};

export function important(message) {
    return console.log(bold(cyanBright(`${message}`)));
};

export function random(message) {
    return console.log(yellow(`${message}`));
};
