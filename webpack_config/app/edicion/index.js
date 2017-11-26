import page from 'page'
import layout from './../layout'
import config from './../config'
var firebase = require('firebase')
var templateDetalle = require('./template')

page('/edicion/:Phone', mostrarLoader, function (ctx, next) {    
  if (!firebase.apps.length) { 
    firebase.initializeApp(config)     
  }

  var db = firebase.database()

  db.ref('/Categoria/' + ctx.params.Phone).once('value').then(snapshot => {
    let item = snapshot.val()
    var main = document.querySelector('main')
    item.id = ctx.params.Phone

    var html =  templateDetalle(item)   
    main.innerHTML = layout(html)
    
    var btn_actualizar = document.querySelector('#actualizar')
    btn_actualizar.addEventListener('click', update1)        
      
  })  
})

function mostrarLoader (ctx, next) {
	var html = `
	  <div class="preloader-wrapper big active preloader">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`
  var main = document.querySelector('main')
  main.innerHTML = layout(html)
  next()
}


function update1(){  
  let doc = document;
  let key  = doc.getElementById('actualizar').getAttribute('key')

  let Equipo1  = doc.querySelector('#Phone').value
  let Camara1  = doc.querySelector('#Camara').value
  let Capacidad1  = doc.querySelector('#Capacidad').value
  let OS1  = doc.querySelector('#OS').value
  let descripcion1  = doc.querySelector('#descripcion').value
  let cantidad1  = doc.querySelector('#cantidad').value
  let URL1  = doc.getElementById('actualizar').getAttribute('URL')


 

var updates = {};

var postData = {
    id: Phone,
    Phone: Equipo1,
    Camara: Camara1,
    Capacidad: Capacidad1,
    OS: OS1,
    URL: URL1
};


console.log(postData)

updates['/Categoria/' + key] = postData;

console.log(updates)

firebase.database().ref().update(updates);

page.redirect('/categoria')
}