import fs from 'fs'

export const rm = (filePath) => {
    fs.rm(filePath, err => {
        if (err) throw new Error(errorMessage)
        console.log('file is removed')
    })
}
