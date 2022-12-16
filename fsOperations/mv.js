import fs from 'fs'
import { EXECUTION_ERROR_MESSAGE } from '../constants.js'

// !path to dir
export const mv = (originPath, copyPath) => {

    const readable = fs.createReadStream(originPath, { encoding: 'utf-8'})
    const writable = fs.createWriteStream(copyPath)
    
    readable.pipe(writable)

    readable.on('error', () => {
        throw new Error(EXECUTION_ERROR_MESSAGE)
    })

    readable.on('end', () => {
        fs.unlink(originPath, () => {})
    })

    writable.on('error', () => {
        throw new Error(EXECUTION_ERROR_MESSAGE)
    })

    writable.on('finish', () => {
        console.log('file is moved')
    })
}
