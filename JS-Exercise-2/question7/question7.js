/* question 7 */
let montharray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let testdate = new Date(2020, 2, 23)
function monthfind(a) {
    let monthnum = a.getMonth()
    console.log(montharray[monthnum])
}
monthfind(testdate)