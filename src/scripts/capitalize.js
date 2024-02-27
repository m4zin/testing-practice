function capitalize(str) {
    let strLength = str.length
    let strFirstLetter = str.charAt(0).toUpperCase()

    return strFirstLetter.concat(str.slice(1, strLength))
}

export {capitalize}

