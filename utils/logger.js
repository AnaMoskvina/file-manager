import path from 'path'

export const logError = message => {
    console.log('\x1b[31m%s\x1b[0m', `Error! ${message}`)
}

const logPrimary = message => {
    console.log('\x1b[36m%s\x1b[0m', message)
}

export const getUsername = () => {
    const args = process.argv.slice(2)
    let userName
    args.forEach(arg => {
        if (arg.toLowerCase().startsWith('--username')) {
            userName = arg.split('=')[1]
        }
    })
    return userName || 'User'
}

export const printGreeting = () => {
    logPrimary(`Welcome to the file manager, ${getUsername()}!`)
}

export const printGoodbyeMessage = () => {
    logPrimary(`
Thank you for using File Manager, ${getUsername()}, goodbye!`)
}

export const printCurrentDirPath = () => {
    console.log(`You're currently in ${path.resolve()}`)
}

