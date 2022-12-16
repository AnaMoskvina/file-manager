import gzip from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { EXECUTION_ERROR_MESSAGE } from '../constants'

export const decompress = (pathToSource, pathToDestination) => {
    const brotli = gzip.createBrotliDecompress()
    const source = createReadStream(pathToSource)
    const destination = createWriteStream(pathToDestination)
    const stream = source.pipe(brotli).pipe(destination)
    stream.on('finish', () => {
        console.log('file is decompressed')
    })

    stream.on('error', () => {
        throw new Error(EXECUTION_ERROR_MESSAGE)
    })
}
