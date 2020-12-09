/* question 15 */
let testarr = [{ id: 0, name: "James", age: 23 }, { id: 1, name: "James", age: 22 }, { id: 2, name: "Paul", age: 24 }, { id: 3, name: "Richard", age: 25 }, { id: 4, name: "Jim", age: 29 }, { id: 5, name: "Jill", age: 34 }, { id: 6, name: "Bort", age: 19 }, { id: 7, name: "Bill", age: 20 }, { id: 8, name: "Gill", age: 55 }, { id: 9, name: "Monorail", age: 98 }]
function delinarr(d) {
    let indel = prompt("would you like to insert or delete?:")
    let plac = prompt("where would you like to ")
    if (plac > d.length) {
        return null;
    }
    if (indel.toUpperCase() == "INSERT") {
        let instuff = prompt("What would you like to insert?")
        d.splice((plac - 1), 0, instuff);
        console.log(d)
    } else if (indel.toUpperCase() == "DELETE") {
        d.splice((plac - 1), 1)
        console.log(d)
    }
}
delinarr(testarr)