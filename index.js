import os from 'os'
import { printGreeting, printGoodbyeMessage, printCurrentDirPath, logError } from './utils/index.js'
import { manageCmd } from './manager/index.js'

process.chdir(os.homedir())
printGreeting()
printCurrentDirPath()

process.stdin.resume()

process.on('SIGINT', () => {
    printGoodbyeMessage()   
    process.exit()
})

process.stdin.on('data', data => {
    manageCmd(data)
    printCurrentDirPath()
})

process.on('uncaughtException', error => {
    logError(error.message)
})

