import path from 'path'
import fsPromises from 'fs/promises';
import { EXECUTION_ERROR_MESSAGE } from '../constants.js';

const getFormattedEntries = (entries, type) => {
    return entries.map(res => res.value).filter(entry => entry.Type === type).sort()
}

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
        const results = await Promise.allSettled(promises);
        const directories = getFormattedEntries(results, 'directory');
        const files = getFormattedEntries(results, 'file');
        console.table([...directories, ...files]);
    } catch (_err) {
        throw new Error(EXECUTION_ERROR_MESSAGE);
    }
}
