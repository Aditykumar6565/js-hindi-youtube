const marvel = ["thor","Ironman","Loki"]
const dc = ["Flash","Batman","Robbin"]

// marvel.push(dc)
// console.log(marvel);   //[ 'thor', 'Ironman', 'Loki', [ 'Flash', 'Batman', 'Robbin' ] ]
// console.log(marvel[3][1]);


// const all = marvel.concat(dc)
// console.log(all);  //[ 'thor', 'Ironman', 'Loki', 'Flash', 'Batman', 'Robbin' ]

// const all = [...marvel,...dc]
// console.log(all);    //[ 'thor', 'Ironman', 'Loki', 'Flash', 'Batman', 'Robbin' ]

// const ano_arr = [1,2,3[4,5,6],7[6,7,[4,5]]]
// const arr1 = ano_arr.flat(Infinity)
// console.log(arr1);  //[ 1, 2, undefined, undefined ]

console.log(Array.isArray("Aditya")); //false
console.log(Array.from("Aditya")); // converted every alphabets into array \


let score1 = 100
let score2 = 100
let score3 = 100
console.log(Array.of(score1,score2,score3));
