//array

const Myarr = [0,1,2,3,4,5]
const MyHeros = ["Shaktiman","Doga","Nagraj"]

// console.log(Myarr);
// console.log(MyHeros);

// //Aray Mthod
// Myarr.push(6)
// //console.log(Myarr);

// Myarr.pop(6)
// //console.log(Myarr);

// //Myarr.shift()
// //console.log(Myarr);

// Myarr.unshift()
// console.log(Myarr);


//slice ,splice

// const newArray = Myarr.join()    //converts array to srting type
// console.log(newArray);
// console.log(typeof(newArray));


console.log("A",Myarr);

const myn1 = Myarr.slice(1,3) //do not change in original array  , do not consider last element
console.log(myn1);
console.log("B",Myarr);


const myn2 = Myarr.splice(1,3) // change in the original array ,consider last element 
console.log(myn2);
console.log("C",Myarr);


