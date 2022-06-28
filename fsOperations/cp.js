import fs from 'fs'

export const cp = (originPath, copyPath) => {

    const readable = fs.createReadStream(originPath, { encoding: 'utf-8'})
    const writable = fs.createWriteStream(copyPath)
    
    readable.pipe(writable)

    readable.on('error', () => {
        throw new Error(`Couldn't read from file`)
    })

    writable.on('error', () => {
        throw new Error(`Couldn't write into file`)
    })

    writable.on('finish', () => {
        console.log('file is copied')
    })
}
