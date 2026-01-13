import app from './app.js'

var h1 = React.createElement('h1', null , 'Hey my name is Rudra')


var root = ReactDOM.createRoot(document.querySelector('#Container'))
root.render(app())