function calculateAverage(arr) {
    let sum = 0

    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i]
    }

    return sum / arr.length
}

function calculateMinAndMax(arr) {
    let sortedArr = arr.sort()
    let min = sortedArr[0]
    let max = sortedArr[sortedArr.length - 1]

    return {
        min, max
    }
}

function analyzeArray(arr) {
    return {
        average: calculateAverage(arr),
        min: calculateMinAndMax(arr).min,
        max: calculateMinAndMax(arr).max,
        length: arr.length
    }
}

export {analyzeArray}
