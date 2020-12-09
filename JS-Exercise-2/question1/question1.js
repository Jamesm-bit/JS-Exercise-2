/* question 1 */
let ip = ["test", "test2", "test3", "tes4", "test5", "test6"]
function firstlast(arr, n) {
    console.log(arr.slice(0, n));
    console.log(arr.slice(-n));
}
firstlast(ip, 2)