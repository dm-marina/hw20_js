// Task1
// const arr =  ['a','b', 'c', 'd'];
// alert(arr[0]+'+'+arr[1]+','+ arr[2]+'+'+arr[3]);

// Task2
// const arr = []
// arr[1]= 2;
// arr[2] = 5;
// arr[3]= 3;
// arr[4]=9;
// let result = (arr[1]*arr[2])+(arr[3]*arr[4]);
// alert (result);

// Task3
// const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// let arr2 = arr[1];
// alert(arr2[0]);

// Task4
// let programmLanguages = {
//     js:['jQuery', 'Angular'], 
//     php: 'hello', css: 'world'
// }
// alert(programmLanguages.js[0].toString());

// Task5
// const arr=[];
// let x ='x' 
// for(i=0;i<10;i++){
//     arr.push(x);
//     x += 'x';
// }
// console.log(arr)

// Task6
// const arr=[];
// for(i=1;i<10;i++){
//     let elem ='';
//     for(let j=0; j<i; j++){
//         elem += i;
//     }
//     arr.push(elem);
// }
// console.log(arr)

// Task7
// function arrayFill(value, quantity) {
//     let arr=[];
//     for(let i =0; i<quantity; i++){
//         arr.push(value);
//     }
//    return arr
// }
// console.log(arrayFill('e','4'));

// Task8
// const arr = [1, 2, 4, 5, 7, 8]
// let sum =0;
// for(let i=0;i<arr.length; i++){
//     sum += arr[i];
//     if(sum>10){
//         console.log (i+1);
//         break
//     }
// }

// Task 9
// const arr =[4,8,10,7,5,1];
// let arr2=[];
// for(let i =0; i<arr.length-1; i--){
//     arr2.push(arr[i]);
// }
// console.log(arr2);

// Task10
// const arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     for(let j =0; j<arr[i].length; j++){
//         sum += arr[i][j]
//     }
// }
// console.log(sum);

// Task11
// const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum =0;
// for(let i=0; i<arr.length; i++){
//         for(let j =0; j<arr[i].length; j++){
//             for (let k=0; k< arr[i][j].length; k++){
//                 sum+=arr[i][j][k]
//             }
//         }
// }
// console.log(sum)