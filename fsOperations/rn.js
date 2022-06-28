import fs from 'fs'

const errorMessage = 'FS operation failed'

export const rn = (wrongFilePath, properFilePath) => {
    fs.access(wrongFilePath, fs.constants.F_OK, err => {
        if (err) throw new Error(errorMessage)
        fs.rename(wrongFilePath, properFilePath, err => {
            if (err) throw new Error(errorMessage)
            console.log('file is renamed')
        })
    })
}
