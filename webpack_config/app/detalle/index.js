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

    page.redirect('/detalle')
  }


}
