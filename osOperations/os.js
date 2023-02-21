import nodeOs from 'os'
import { INVALID_INPUT_MESSAGE } from '../constants.js';

export const os = (flag) => {
    switch(flag) {
        case '--eol':
            console.log(JSON.stringify(nodeOs.EOL))
            break;
        case '--cpus':
            console.log(nodeOs.cpus())
            break;
        case '--homedir':
            console.log(nodeOs.homedir())
            break;
        case '--username':
            console.log(nodeOs.userInfo().username)
            break;
        case '--architecture':
            console.log(nodeOs.arch())
            break;
        default:
            throw new Error(INVALID_INPUT_MESSAGE)
    }
}
