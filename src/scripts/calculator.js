// A calculator object that contains functions for the basic operations:
// add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.

const calculator = (function() {

    function add(a, b) {
        return Number(a + b)
    }

    function sub(a, b) {
        return Number(a - b)
    }

    function div(a, b) {
        return Number(a / b)
    }

    function multi(a, b) {
        return Number(a * b)
    }

    return {
        add,
        sub,
        div,
        multi
    }

})()

export {calculator}
