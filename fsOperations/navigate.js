import os from 'os'
import path from 'path'
import fs from 'fs'

const changeDir = (pathName) => {
    const newPath = path.resolve(pathName)
    if (newPath === os.homedir()) return os.homedir()
    process.chdir(newPath)
    return newPath
}

export const cd = (pathName) => {
    changeDir(pathName)
}

export const up = () => {
    changeDir('..')
}

export const ls = () => {
    fs.readdir(path.resolve(), 'utf8', (err, files) => {
        if (err) throw new Error(errorMessage)
        console.log(files)
    })
}