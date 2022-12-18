import fsPromises from 'fs/promises'
import path from 'path'

export const fileNameResolver = async (distDir, filePath) => {
    const baseName = path.basename(filePath)
    const fileName = path.parse(filePath).name
    const ext = path.parse(filePath).ext
    const files = await fsPromises.readdir(distDir, 'utf8')
    if (!files.includes(baseName)) return baseName
    return`${fileName}-copy.${ext}`
}