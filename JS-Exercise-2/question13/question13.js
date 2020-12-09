/* question 13 */
let testnum = 1234567890
function adddelim(a) {
    for (i = a.toString().length; i > 0; i--) {
        if ((i % 3) == 0) {
            a = a.toString().slice(0, -i) + "," + a.toString().slice(-i)
        }
    }
    console.log(a)
}
adddelim(testnum)