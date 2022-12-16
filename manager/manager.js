import { operations } from "./operations.js"
import { parseCmd } from "../utils/parseCmd.js"
import { INVALID_INPUT_MESSAGE} from '../constants.js'

const getIsExitCmd = cmd => parseCmd(cmd)[0] === '.exit'

const isValidInput = input => {
    const [cmd, ...args] = input
    const command = operations[cmd]
    if (!command) return false
    if (command.argsLen && command.argsLen !== args.length) return false
    return true
}

const perform = input => {
    const [cmd, ...args] = input
    if (!isValidInput(input)) throw new Error(INVALID_INPUT_MESSAGE)
    return operations[cmd].operation(...args)
}

export const manageCmd = cmd => {
    if (getIsExitCmd(cmd)) process.exit()
    perform(parseCmd(cmd))
}
