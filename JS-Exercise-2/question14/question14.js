/* question 14 */
let testarr = [{ id: 0, name: "James", age: 23 }, { id: 1, name: "James", age: 22 }, { id: 2, name: "Paul", age: 24 }, { id: 3, name: "Richard", age: 25 }, { id: 4, name: "Jim", age: 29 }, { id: 5, name: "Jill", age: 34 }, { id: 6, name: "Bort", age: 19 }, { id: 7, name: "Bill", age: 20 }, { id: 8, name: "Gill", age: 55 }, { id: 9, name: "Monorail", age: 98 }]
function orgarr(d) {

    function compare(a, b) {
        let agea = a.age;
        let ageb = b.age;
        let namea = a.name.toUpperCase();
        let nameb = b.name.toUpperCase();
        if (agea > ageb) {
            return 1
        } else if (ageb > agea) {
            return -1
        } else {
            if (namea > nameb) {
                return 1
            } else if (nameb > namea) {
                return -1
            } else {
                return 0
            }
        }
    }
    console.log(d.sort(compare))
}
orgarr(testarr)