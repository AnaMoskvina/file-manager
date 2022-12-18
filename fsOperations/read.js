import fs from 'fs'
import os from 'os'
import { stdout } from 'process'
import { Transform } from 'stream'

export const read = filePath => {
    const newLineTransform = new Transform({
        transform(chunk, _encoding, callback) {
          this.push(chunk)
          this.push(os.EOL)
          callback()
        }
      })

    fs.createReadStream(filePath)
        .pipe(newLineTransform)
        .pipe(stdout)
}