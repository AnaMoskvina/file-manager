import gzip from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { EXECUTION_ERROR_MESSAGE } from '../constants.js'

export const compress = (pathToSource, pathToDestination) => {
    const brotli = gzip.createBrotliCompress()
    const source = createReadStream(pathToSource)
    const destination = createWriteStream(`${pathToDestination}`)
    const stream = source.pipe(brotli).pipe(destination)
    stream.on('finish', () => {
        console.log('file is compressed')
    })

    stream.on('error', () => {
        throw new Error(EXECUTION_ERROR_MESSAGE)
    })
}
