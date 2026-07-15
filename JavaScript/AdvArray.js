// this will give error as it is not run in d8
// // const MyArr = []
// %DebugPrint(MyArr) 
// Two Types of Array
// 1st. continuous or Packed
// 2nd. Holey
// Sub-Category of these two
// SMI(Small Integer)
// Packed Element
// Double(Float,Function,String)
// const test1 = [1,2,,3,4,5]
// this is a holey smi
// this is a Packed smi
const test2 = [1,2,3,4,5]
// above is the best type of array but the limitation is the restrcited type of elements
test2.push(6.0)
// now it has become as packed double
test2.push('7')
// now it has become an packed element
test2[10] = 10
// now it has become an holey element
console.log(test2)
console.log(test2.length);
console.log(test2[9]);
// holey elements are very expensive to iterate
// like in this case console.log(test2[9]); it is asking to print the 8th position element but because of hole there is nothing then we have to do perform these to determine whehther it has its ow value or not
// 1st Bound Check(if the position to be printed is more than the length of the array it jus prints undefined and its done)
// 2nd hasOwnProperty(test2, 9)
// 3rd hasOwnProperty(test2.prototype, 9)
// 4th hasOwnProperty(object.prototype, 9)
const test3 = [1,2,3,4,5]
// Optimization Level
// top priority-Continous_SMI > Continous_Double > Continous_Packed
// Holey_SMI > Holey_Double > Holey_Packed
// if downgraded returning is next to impossible for eg
//  if you reach from Continous SMI to Continous Double then it is impossible for the double to move back to SMI even if you delete the element which made the SMI to Double
const test4 = new Array(3)
// it has 3 holes ie Holey Elements
// test4[0] = '1' Holey_Elements
// test4[1] = '2' Holey_Elements
// test4[2] = '3' Holey_Elements
const test5 = []
// test5.push('1')  Packed_elements
// test5.push('2')  Packed_elements
// test5.push('3')  Packed_elements
// if we push NaN,Infinity to an array they become double if they were SMI 