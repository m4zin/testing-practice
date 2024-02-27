function onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str) || /^[A-Za-z]*$/.test(str);
}

function caesarCipher(str, shift) {
    let alphabets =
        [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
        ]

    if(!onlyLettersAndSpaces(str)) {
        return false
    }

    let strLen = str.length

    let cipheredText = '';
    let replacingCharElem = null

    for(let i = 0; i < strLen; i++) {
        if(str[i] === ' ') {
            cipheredText += ' '
        }
        else {
            let indexOfCurrChar = alphabets.indexOf(str[i].toUpperCase())
            let numOfShifts = indexOfCurrChar + shift
            if(numOfShifts < 26) {
                replacingCharElem = alphabets[numOfShifts]
            }
            else {
                while(numOfShifts >= 26) {
                    numOfShifts = numOfShifts - 26
                }
                replacingCharElem = alphabets[numOfShifts]
            }
            cipheredText += replacingCharElem
        }
    }

    return cipheredText.toLowerCase()
}

export {caesarCipher}
