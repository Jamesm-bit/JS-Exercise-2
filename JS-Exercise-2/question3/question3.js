/* question 3 */
let numarr = [1,1,2,3,4,5,5,5,6,7,8,8,9]
let finarr = []
function mostcommon(d) {
  
  function count(array,value) {
    let n = 0;
    for(i=0;i <array.length;i++) {
      if(array[i] == value) {
        n++
      }
    }
    return n
  }
  function compare(a, b) {
    if(a.count > b.count) {
      return 1
    } else if (b.count > a.count) {
      return -1
    } else {
      return 0
    }
  }
  
  for(item in d) {
    let countitem = count(d, item)
    let itemname = d[item].toString()
    finarr.push({item:itemname,count:countitem})
  }
  finarr = finarr.sort(compare)
  mostcomm = finarr.pop()
  console.log("Output = " + mostcomm.item)
}
mostcommon(numarr)