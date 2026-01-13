// /* ============================
//    1. Normal JavaScript Basics
//    ============================ */

// // A simple function
// function hero() {
//   console.log("Hey I am Sarthak");
// }

// hero(); // calling the function

// // Function with parameters
// function add(a, b) {
//   return a + b;
// }

// console.log(add(10, 20)); // 30


// /* ============================
//    2. DOM using Vanilla JavaScript
//    ============================ */

// // Creating an h1 element
// var h1JS = document.createElement("h1");
// h1JS.innerHTML = "Hello JS";

// // Adding it to the page
// document.body.appendChild(h1JS);


/* ============================
   3. Same thing using React
   ============================ */

// // React element (not HTML, it's JavaScript)
// var h1React = React.createElement("h1", null, "Hello World");
// var h2React = React.createElement("h2", null, "Portfolio Web ");
// var div = React.createElement('div', {id: 'parent', class:'elem'}, [h1React,h2React])
// /*
//   React needs a root (a container)
//   This is where React will control the UI
// */
// // var container = document.querySelector("#Container");

// // // Create React Root
// // var root = ReactDOM.createRoot(container);

// // or if we wan to skip thses 2 lines
// var root = ReactDOM.createRoot(document.querySelector(`#Container`))


// // Render the React element inside the root
// root.render(div);

import box from './test.js'
import cicle from './app.js'


var root = ReactDOM.createRoot(document.querySelector('#Container'))

const final = (() => React.createElement('div',null , [box(),cicle()]))

root.render(final())