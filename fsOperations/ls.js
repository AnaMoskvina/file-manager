import path from 'path'
import fsPromises from 'fs/promises'
import { EXECUTION_ERROR_MESSAGE } from '../constants.js'

export const ls = async () => {
    try {
        const entries = await fsPromises.readdir(path.resolve(), {
            withFileTypes: true,
        })

        const directories = entries
            .filter((entry) => entry.isDirectory())
            .map(({ name }) => ({ Name: name, Type: 'directory'}))
            .sort()

        const files = entries
            .filter((entry) => entry.isFile())
            .map(({ name }) => ({ Name: name, Type: 'file'}))
            .sort()

        console.table([...directories, ...files])
    } catch (_err) {
        throw new Error(EXECUTION_ERROR_MESSAGE)
    }
}