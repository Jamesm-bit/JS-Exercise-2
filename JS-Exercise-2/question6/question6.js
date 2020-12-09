/* question 6 */
let alpharray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let storarr = []
let finarr = []
function alpharr(a, b, n) {
    letapos = alpharray.indexOf(a);
    letbpos = alpharray.indexOf(b);
    storarr = alpharray.slice(letapos, letbpos)
    let i = 0;
    while (i < storarr.length) {
        let o = 0;
        finarr.push(alpharray[i])
        i = i + n;
    }

    console.log(finarr)
}
alpharr('a', 'z', 3)