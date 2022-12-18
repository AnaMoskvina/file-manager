import os from 'os'
import path from 'path'
import { EXECUTION_ERROR_MESSAGE } from '../constants.js'

const changeDir = async (pathName) => {
    try {
        const newPath = path.resolve(pathName)
        const isSubDir = os.homedir().includes(newPath)
        if (isSubDir) {
            process.chdir(os.homedir())
            return os.homedir()
        }
        process.chdir(newPath)
        return newPath
    } catch(_err) {
        throw new Error(EXECUTION_ERROR_MESSAGE)
    }
}

export const cd = (pathName) => {
    changeDir(pathName)
}

export const up = () => {
    changeDir('..')
}
