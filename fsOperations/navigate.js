import os from 'os'
import path from 'path'
import fs, { rmSync } from 'fs'
import fsPromises from 'fs/promises';
import { EXECUTION_ERROR_MESSAGE } from '../constants';

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

// TODO: should be sorted
export const ls = async () => {
    try {
        const promises = [];
        const entries = await fsPromises.readdir(path.resolve(), 'utf8');

        entries.forEach(entry => {
            const promise = new Promise(async (res, _rej) => {
                const stat = await fsPromises.lstat(path.resolve(entry));
                if (stat.isDirectory()) {
                    res({ Name: entry, Type: 'directory' })
                } else {
                    res({ Name: entry, Type: 'file' })
                }
            })
            promises.push(promise)
        })
        const files = await Promise.allSettled(promises);
        console.table([...files.map(res => res.value)]);
    } catch (_err) {
        throw new Error(EXECUTION_ERROR_MESSAGE);
    }
}
