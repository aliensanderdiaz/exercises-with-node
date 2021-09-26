var he = require('he');

let encode = he.encode('PL&P S.A.S.')
let scape = encodeURI('PL&P S.A.S.');
console.log(
    {
        encodeConHe: encode,
        scape
    }
)


const reemplace = function(str) {
    return str.replaceAll('&', '&amp;')
}

let a =reemplace('PL&P S.A.S.')

console.log({a})