import fs from 'fs'
import os from 'os'
import { stdout } from 'process'
const { createHash } = await import('node:crypto')

export const hash = (filePath) => {
  const hash = createHash('sha256')
  fs.createReadStream(filePath)
    .pipe(hash)
    .setEncoding('hex')
    .pipe(stdout)

  hash.on('close', () => {
    console.log(os.EOL)
  })
}
