import os from 'os'
import path from 'path'

const changeDir = (pathName) => {
    const newPath = path.resolve(pathName)
    const isSubDir = os.homedir().includes(newPath)
    if (isSubDir) {
        process.chdir(os.homedir())
        return os.homedir()
    }
    process.chdir(newPath)
    return newPath
}

export const cd = (pathName) => {
    changeDir(pathName)
}

export const up = () => {
    changeDir('..')
}
