import fs from 'fs'
import path from 'path'
import { EXECUTION_ERROR_MESSAGE } from '../constants.js'

export const add = (fileName) => { 
    const readeable = fs.createWriteStream(path.resolve(process.cwd(), fileName))
    readeable.close()
    readeable.on('error', _error => {
        throw new Error(EXECUTION_ERROR_MESSAGE)
    })
    readeable.on('close', () => {
        console.log('file is created')
    })
}
