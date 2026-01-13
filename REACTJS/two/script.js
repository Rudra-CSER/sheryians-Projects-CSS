// // import kuchbhi from './app.js'

// // console.log(kuchbhi);

// function hero(){
//   console.log('Hey I am Sarthak'); 
// }
// // console.log(hero());
// hero()

// function add(a,b){
//     return a + b;
// }
// console.log(add(10,20));


// import her from './app.js'

// // console.log(her);
// her()

// var h1  = document.createElement(`h1`)
// h1.innerHTML= "Hello js"

// document.body.appendChild(h1)
// ratertan

var h1 = React.createElement('h1', null ,'Hello World')
//this should be react root _> cotainer concept 
var Container = document.querySelector(`#Container`)
// innetalizing the root elemt 
var root = ReactDOM.createRoot(Container)
// rendering the elemet in root 
root.render(h1)