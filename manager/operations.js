import { cd, up, ls, read, cp, add, rm, rn, mv } from '../fsOperations/index.js'
import { os } from '../osOperations/index.js'
import { hash } from '../hashOperations/index.js'
import { compress, decompress } from '../compressOperations/index.js'

const dirOperations = {
    up: {
        argsLen: 0,
        operation: up
    },
    cd: {
        argsLen: 1,
        operation: cd
    },
    ls: {
        argsLen: 0,
        operation: ls
    }
}

const fileOperations = {
    cat: {
        argsLen: 1,
        operation: read
    },
    add: {
        argsLen: 1,
        operation: add
    },
    rn: {
        argsLen: 2,
        operation: rn
    },
    cp: {
        argsLen: 2,
        operation: cp
    },
    mv: {
        argsLen: 2,
        operation: mv
    },
    rm: {
        argsLen: 1,
        operation: rm
    }
}

const osOperations = {
    os: {
        argsLen: 1,
        operation: os
    }
}

const hashOperations = {
    hash: {
        argsLen: 1,
        operation: hash
    }
}

const compressOperations = {
    compress: {
        argsLen: 2,
        operation: compress
    },
    decompress: {
        argsLen: 2,
        operation: decompress
    }
}
export const operations = {
    ...dirOperations, 
    ...fileOperations, 
    ...osOperations, 
    ...hashOperations,
    ...compressOperations
}