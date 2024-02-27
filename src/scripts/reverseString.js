function reverseStr(str) {
    let strLength = str.length - 1
    let reversedStr = ''

    for(let i = strLength; i >= 0; i--) {
        reversedStr += str[i]
    }

    return reversedStr
}

export {reverseStr}
