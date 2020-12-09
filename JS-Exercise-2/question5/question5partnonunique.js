/* getting the items that appear in both arrays */
let ip = ["test", "test2", "test3", "test4", "test5", "test6"]
let ip2 = ["test7", "test2", "test8", "test9", "test10", "test6"]
let finarr = []
function combarray(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === arr[i]) {
                finarr.unshift(arr2[j])
            }
        }
    }
    console.log(finarr);
}
combarray(ip, ip2);