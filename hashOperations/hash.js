import fs from 'fs'
import os from 'os'
import { stdout } from 'process'
import { Transform } from 'stream'
const { createHash } = await import('node:crypto')

export const hash = filePath => {

  const newLineTransform = new Transform({
    transform(chunk, _encoding, callback) {
      this.push(chunk)
      this.push(os.EOL)
      callback()
    }
  })

  fs.createReadStream(filePath)
    .pipe(createHash('sha256'))
    .setEncoding('hex')
    .pipe(newLineTransform)
    .pipe(stdout)
}
