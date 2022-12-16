import fs from 'fs'
import { EXECUTION_ERROR_MESSAGE } from '../constants.js'

export const rm = (filePath) => {
    fs.rm(filePath, err => {
        if (err) throw new Error(EXECUTION_ERROR_MESSAGE)
        console.log('file is removed')
    })
}
