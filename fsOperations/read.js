import fs from 'fs'
import { stdout } from 'process'

export const read = (filePath) => {
    const readStream = fs.createReadStream(filePath)
    readStream.pipe(stdout)
    readStream.on('error', () => {
        throw new Error(`Couldn't read from file`)
    })
}