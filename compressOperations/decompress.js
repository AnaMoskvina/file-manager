import gzip from 'zlib'
import { createReadStream, createWriteStream } from 'fs'

export const decompress = (pathToSource, pathToDestination) => {
    const brotli = gzip.createBrotliDecompress()
    const source = createReadStream(pathToSource)
    const destination = createWriteStream(pathToDestination)
    const stream = source.pipe(brotli).pipe(destination)
    stream.on('finish', () => {
        console.log('file is decompressed')
    })

    stream.on('error', () => {
        throw new Error(`Couln't compress file`)
    })
}
