/* question 10 */
let testdate = new Date(2020, 2, 23)
let testdate2 = new Date(2000, 3, 2)
function difdate(a, b) {
    let fintime = 0
    if (a > b) {
        fintime = a.getTime() - b.getTime();
        let finyear = Math.floor((((((fintime / 1000) / 60) / 60) / 24) / 30) / 12)
        let finmonth = Math.floor((((((fintime / 1000) / 60) / 60) / 24) / 30) % 12)
        let finday = Math.floor((((((fintime / 1000) / 60) / 60) / 24) % 30))
        console.log(finyear + " Years " + finmonth + " Months " + finday + " Days")
    } else {
        fintime = b.getTime() - a.getTime();
        let finyear = Math.floor((((((fintime / 1000) / 60) / 60) / 24) / 30) / 12)
        let finmonth = Math.floor((((((fintime / 1000) / 60) / 60) / 24) / 30) % 12)
        let finday = Math.floor((((((fintime / 1000) / 60) / 60) / 24) % 30))
        console.log(finyear + " Years " + finmonth + " Months " + finday + " Days")
    }
}
difdate(testdate, testdate2)