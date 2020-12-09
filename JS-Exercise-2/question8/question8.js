/* question 8 */
let testdate = new Date(2020, 2, 23)
let testdate2 = new Date(2020, 3, 2)
function difdate(a, b) {
    let fintime = 0
    if (a > b) {
        fintime = a.getTime() - b.getTime();
        fintime = (((fintime / 1000) / 60) / 60) / 24
        console.log(fintime + " days between the dates")
    } else {
        fintime = b.getTime() - a.getTime();
        fintime = (((fintime / 1000) / 60) / 60) / 24
        console.log(fintime + " days between the dates")
    }
}
difdate(testdate, testdate2)