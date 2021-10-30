/// telephoneWords(input, output = [], ... ?)
// input is a string of digits -> '83461' (emphasis on string)
// output is an array of all 'words' (strings) representable by translating
// those digits to what's on a telephone keypad
// ... (following ITU E.161 standard, modified for 0, don't @ me)
// order of output does not matter
// '746024' -> ['PGM AG', 'RHO CH'...]
// all output strings should be the same length
// what does the output for '309' look like?
// ['D W', 'D X', 'D Y', 'D Z', 'E X', ...]
// 1: _,@
// 2: ABC
// 3: DEF
// 4: GHI
// 5: JKL
// 6: MNO
// 7: PQRS
// 8: TUV
// 9: WXYZ
// 0: ' ' (a space)

var phone_keys = {
    1: '_,@',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
    0: ' ',
}
var phone_keys = {
    1: '_,@',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
    0: ' ',
}


function telephoneWords(input, output = [], position = 0, partial = "") {

    input = input.toString();

    /// end the recursion once we get to the end of the input
    if (position == input.length) {
        output.push(partial);
    }

    else {
        // for loop to iterate through the possible letter options for that button press in phone_keys
        // if it's a button with 3 options, it will loop through 3 times; 4 options, 4 times; one option, one time
        for (let i = 0; i < phone_keys[input[position]].length; i++) {
            // keep calling the function within the function for recursion
            // phone_keys[input[position]][i] gets us a letter from phone_keys from the number we pressed (input[position] is the number we pressed)
            telephoneWords(input, output, position + 1, partial + phone_keys[input[position]][i]);
        }
    }

    return output;
}

results = telephoneWords('8675309')
console.log(results)
console.log(results.length)
