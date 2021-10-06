
/* 1.1 */

for (let i = 0 ; i <= 9 ; i++) {
    console.log(i)
}

/* 1.2 */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log("resto ",array[i])
    }
}

/* 1.3 */

let arraySheep = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < arraySheep.length ; i++) {
    if (arraySheep [i] <= 9) {
    console.log("Intentando dormir"); } 
    else if (arraySheep [i] = 10) {
    console.log("Dormido!")
    }
}