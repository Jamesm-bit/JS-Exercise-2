/* question 2 */
let testnum =  "02544168"
function adddash(d) {
  let stringnum = d.toString()
  console.log(stringnum)
  for(i=1;i<stringnum.length;i++){
    thisnum = Number(stringnum[i])
    prevnum = Number(stringnum[i-1])
    if((thisnum % 2 ==0) && (prevnum%2==0)) {
      stringnum = stringnum.slice(0,i)+"-"+stringnum.slice(i)
    } 
  }
  console.log(stringnum)
}
adddash(testnum)