import path from 'path'
import fs from 'fs'
import { fileNameResolver } from './utils.js'
import { EXECUTION_ERROR_MESSAGE } from '../constants.js'

export const mv = async (originPath, distDir) => {
    const newFileName = await fileNameResolver(distDir, originPath)

    const readable = fs.createReadStream(originPath, { encoding: 'utf-8'})
    const writable = fs.createWriteStream(path.resolve(distDir, newFileName))
    
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