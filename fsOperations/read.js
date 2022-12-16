import fs from 'fs'
import os from 'os'
import { stdout } from 'process'
import { EXECUTION_ERROR_MESSAGE } from '../constants'

export const read = (filePath) => {
    const readStream = fs.createReadStream(filePath)
    readStream.pipe(stdout)
    readStream.on('error', () => {
        throw new Error(EXECUTION_ERROR_MESSAGE)
    })
    readStream.on('close', () => {
        console.log(os.EOL)
    })
}