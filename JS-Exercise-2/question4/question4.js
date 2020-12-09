/* question 4 */
let numarr = [1,1,2,3,4,5,5,5,6,7,8,8,9]
function shuffle(d) {
  for(i=0;i<d.length;i++){
    let rannum = Math.floor(Math.random() * d.length)
    d.splice(rannum, 0, d[i]);
    d.splice(d[i], 1)
  }
  
}
shuffle(numarr)
console.log(numarr)