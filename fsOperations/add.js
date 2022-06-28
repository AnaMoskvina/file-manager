import fs from 'fs'
import path from 'path'

export const add = (fileName) => { 
    const readeable = fs.createWriteStream(path.resolve(process.cwd(), fileName))
    readeable.on('error', _error => {
        throw new Error(`Couldn't read from file`)
    })
    readeable.on('finish', () => {
        console.log('file is created')
    })
}
