export const parseCmd = (cmd) => {
    return cmd.toString().split(' ').map(string => string.toLowerCase().trim())
}