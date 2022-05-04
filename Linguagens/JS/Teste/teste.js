/* var y = 0;
var x = 1; */

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('os números pares são:', evenNums);
}

let array = [1, 2, 4, 5, 8, 9];

returnEvenValues(array);