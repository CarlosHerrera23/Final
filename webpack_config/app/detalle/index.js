import page from 'page'
import layout from './../layout'
import config from './../config'
var firebase = require('firebase')
var templateDetalle = require('./template')

page('/detalle/:Phone', mostrarLoader, function (ctx, next) {  
  if (!firebase.apps.length) { 
    firebase.initializeApp(config) 
  }

  var db = firebase.database()

  db.ref('/Categoria/' + ctx.params.Phone).once('value').then(snapshot => {
    let item = snapshot.val()
    var main = document.querySelector('main')
    item.id = ctx.params.Phone

    var html =  templateDetalle(item)
    main.innerHTML= layout(html)

     var borrarBtn = document.querySelector('#borrar')
   borrarBtn.addEventListener('click', borrar)
   var btn_actualizar = document.querySelector('#actualizar')
    btn_actualizar.addEventListener('click', update1)    
    
  })
})

function mostrarLoader (ctx, next) {
	var html = `
	  <div class="preloader-wrapper big active">
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


  

 function borrar () {

  if (!firebase.apps.length) {
  firebase.initializeApp(config)
  }

var db = firebase.database()
  let doc = document;
  let key  = doc.getElementById('borrar').getAttribute('key')

  var confirmar = confirm("Se eliminara este producto")

  console.log(confirmar)

  if (key!=null && confirmar == true) {
    var ref = db.ref("Categoria")
    ref.child(key).remove()

    
  }

page.redirect('/detalle')
}

function update1(){  
  let doc = document;
  let key  = doc.getElementById('actualizar').getAttribute('key')

  let Equipo1  = doc.querySelector('#Phone').value
  let Camara1  = doc.querySelector('#Camara').value
  let Capacidad1  = doc.querySelector('#Capacidad').value
  let OS1  = doc.querySelector('#OS').value
  let Color1  = doc.querySelector('#Color').value
  let img  = doc.getElementById('actualizar').getAttribute('URL')


 

var updates = {};

var postData = {
    id: key,
    Phone: Equipo1,
    Camara: Camara1,
    Capacidad: Capacidad1,
    Color:Color1,
    OS: OS1,
    URL: img
};


console.log(postData)

updates['/Categoria/' + key] = postData;

console.log(updates)

firebase.database().ref().update(updates);

page.redirect('/categoria')
}