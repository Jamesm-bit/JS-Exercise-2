/* question 12 */
let str = "RapidOpsDevelopment"
let finarr = new Array()
function sepstring(a, n) {
    while (n < a.length) {
        finarr.push(a.slice(0, (n)))
        a = a.replace(a.slice(0, (n)), '')
    }
    console.log(finarr)
}
sepstring(str, 2)