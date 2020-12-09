/* question 11 */
let str = "this is a test";
let instr = "not"
let finstr = ""
function insertstring(a, b, n) {
    finstr = a.slice(0, (n)) + b + a.slice(n)
    console.log(finstr)
}
insertstring(str, instr, 7)