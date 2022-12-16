import fs from 'fs'
import { EXECUTION_ERROR_MESSAGE } from '../constants'

export const rn = (wrongFilePath, properFilePath) => {
    fs.access(wrongFilePath, fs.constants.F_OK, err => {
        if (err) throw new Error(EXECUTION_ERROR_MESSAGE)
        fs.rename(wrongFilePath, properFilePath, err => {
            if (err) throw new Error(EXECUTION_ERROR_MESSAGE)
            console.log('file is renamed')
        })
    })
}
