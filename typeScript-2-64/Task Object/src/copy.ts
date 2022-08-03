// type Justas ={
//     id:string,
//     name:string,
//     surname:string,
//     age:number,
//     height?:number,
//     weight?:number,
// };
// const person:Justas ={
//     id: '334343434',
//     name: 'kevin',
//     surname:'vesulas',
//     age:100
// }
// console.log(person)

// const person11: Justas = {
//     id: '39304075689',
//     name: 'Ryja',
//     surname: 'Žaneirytė',
//     age: 41,
//     height: 1.65,
//     weight: 55,
//   };
//   const person33: Person = {
//     id: '39304075689',
//     name: 'Brudas',
//     surname: 'Veilokas',
//     age: 11,
//     height: 1.45,
//     weight: 45,
//   }


// // type CreateFullname = (zmogus:Justas)=> string;
// // const createFullname:CreateFullname=({ name, surname})=>`${name} ${surname}`

// // let names:string[] = ['justas','kasparas','antanas']
// // names.push('kevinas')
// // // names.push(20)



// // let numbers = [10,20,30,40]
// // numbers.push(100)



// // let mixed = ['ken',4,'chun-li',9,0]
// // mixed.push('kevin',100)


// // let ninja = {
// //     name: 'mario',
// //     belt: 'string',
// //     age:30
// // }
// // ninja.name='justas'
// // console.log(ninja.name)

// const numbers1:number[]=[1,2,3,4,5,6,7,8,9]
// // numbers1.push("100")
// // console.log(numbers1)
// const names1:Array<string>=['jagnita','kimparas','bliusius','wwwww']



// const people1: Justas[]=[{


// }]


/*
  Aprašant masyvų tipus reikia nurodyti kokie elementai sudarys masyvai, galimos 2 sintaksės:
    * tipas[] -> number[], string[], Person[] ir t.t.
    * Array<tipas> -> Array<number>, Array<string>, Array<Person> ir t.t.
*/

// type Person = {
//     id: string,
//     name: string,
//     surname: string,
//     age: number,
//     height?: number, // Neprivaloma savybė
//     weight?: number, // Neprivaloma savybė
//   };
  
//   const numbers: number[] = [1, 2, 3, 4, 5, 6];
//   const names: Array<string> = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
//   const people: Person[] = [{
//     id: '39304075689',
//     name: 'Verundijus',
//     surname: 'Bauda',
//     age: 51,
//   }, {
//     id: '39304075689',
//     name: 'Ryja',
//     surname: 'Žaneirytė',
//     age: 41,
//     height: 1.65,
//     weight: 55,
//   }, {
//     id: '39304075689',
//     name: 'Brudas',
//     surname: 'Veilokas',
//     age: 11,
//     height: 1.45,
//     weight: 45,
//   }];
  
//   // Kaip ir kiti tipai, masyvai gali būti naudojami funkcijų parametrams arba funkcijų grąžinimo tipams aprašyti
//   type CreatePeopleArrayFunction = (p1: Person, p2: Person) => Person[];
  
//   const printStrings = (strings: string[]): void => {
//     const printString = (str: string): void => console.log(str);
  
//     strings.forEach(printString);
//   };
  
//   const sumNumbers = (nums: Array<number>): number => {
//     const numberSumReducer = (sum: number, num: number): number => sum + num;
  
//     return nums.reduce(numberSumReducer, 0);
//   };
  
//   const createPeopleArray: CreatePeopleArrayFunction = (p1, p2) => [p1, p2];
  
//   console.group('Panaudojimo pavyzdžiai:');
//   {
//     console.group('printStrings');
//     {
//       printStrings(names);
//     }
//     console.groupEnd();
  
//     console.group('sumNumbers');
//     {
//       const result: number = sumNumbers(numbers);
//       console.log({
//         numbers,
//         result,
//       });
//     }
//     console.groupEnd();
  
//     console.group('createPeopleArray');
//     {
//       const couple: Array<Person> = createPeopleArray(people[0], people[1]);
//       console.log(couple);
//     }
//     console.groupEnd();
//   }
//   console.groupEnd();
  
//   console.group('Užduotys');
//   {
//     console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
//     {
//       const numbers: number[] = [1, -8, -6, 7, 5, 1];
  
//       function addPositiveNumbers(arr) {
//         const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
  
//         return arr.reduce(positiveNumberReducer, 0);
//       }
  
//       console.log({
//         numbers,
//         sumOfPositiveNumbers: addPositiveNumbers(numbers),
//       });
//     }
//     console.groupEnd();
  
//     console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
//     {
//       /*
//         Pvz.:
//          * ['Lietuviškas', 'Nepriklausomas', 'Kanalas'] -> LNK
//          * ['Lietuvos', 'Respublikos', 'Televizija'] -> LRT
//          * ['Loughing', 'Out', 'Loud'] -> LOL
//       */
//     }
//     console.groupEnd();
  
//     console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
//     {
//       /*
//         Pvz.:
//          * [1, 7, 8] -> 56
//          * [98, 74, 5, 0] -> 0
//          * [17, 10, 5] -> 850
//       */
//     }
//     console.groupEnd();
//   }
//   console.groupEnd();
  


const double =(num:number):number => num * 2
const numbersArr = [1,2,3,4,5,6,7]

console.log(double(10))
const numbersDoubled: number[] =numbersArr.map(double)
console.log(numbersDoubled)

// const replaceSpacesWithDash = (str:string):string => str.replaceAll('','');
// 'replaceSpacesWithDash(\'labas vakaras'):'




