var arr = ['rudra','sayak','remon','ankur','bikash']

var [a,b] = arr   // when we applied the ...,c that will work as a rest oparetor

console.log(a);

var obj = {
    user : ' Rudra ',
    age : 12,
    city: 'Berhampre',
    skills : ['js','C++','React','NExt' ]
}
var obj2 = {...obj}

// or we can use something Like 
var {user} = obj 
var [first, ...restSkills] = skills   //simler REACT
obj.user = 'Safik';

//import and export
// default import
// default export       --->>> it will make the import name deafult 



import user from './app'


import {user} from './app'  // this will print the user name from the app.js file //this will specificly import tthat
console.log(user)