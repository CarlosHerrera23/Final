const page = require('page')
const firebase = require('firebase')

//configuracion de firebase
const config = require('./../config')

if (!firebase.apps.length) {
	firebase.initializeApp(config)
	}

var db = firebase.database()


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	function obtenerDatos (dato) {
		const datos = dato.val()
		const keys = Object.keys(datos)
		var html = ''
		var htmlGame = ''
		var index = ''

		var admin = false

		for( var i = 0; i <keys.length; i++) {
			const key = keys[i]
			const categoria = datos[key]
			
			if (categoria.uid == categoria.uid && categoria.tipo == "admin") {
				admin = true
			}	
		}

		if (admin == false) {
			page.redirect('/')
		}
	}
	db.ref('categoria').once('value').then(obtenerDatos)
  } 
});


page('/update/:Phone', (ctx, next) => {
	db.ref('/Categoria/' + ctx.params.Phone).once('value').then((snapshot) => {
		let categoria = snapshot.val()
		let html = `


		<div class="container">
			<div class="page">

				<div class="entry-content">
					<div class="row">
						<div class="col-sm-6 col-md-4">
							<div class="product-images">
								<figure class="large-image">
									<a href=""><img src="${categoria.url}"></a>
								</figure>
							</div>
						</div>

						<div class="col-sm-6 col-md-8" style= "text-align: center">
										<div>
											<form>
												<div >
												<input type="text" value="${categoria.Camara}" id="camara">
												<input type="text" value="${game.Capacidad}" id="capacidad">
												<input type="text" value="${game.OS}" id="os">

												</div>
											</form>
									</div>
									</div> <!-- .column -->
								</div> <!-- .row -->
						</div>
						<div class="addtocart-bar col-md-12" style = " text-align:center">
										<h3 class="product-title"><a id="borrar" key="${ctx.params.Phone}" style = "margin-top:0px" class ="button">borrar</a></h3>
										<h3 class="product-title">
										<a 	id="update" class ="button"
										key="${ctx.params.Phone}"
										Camara="${categoria.Camara}"
										Capacidad="${categoria.Capacidad}"
										OS="${categoria.OS}"
										style= "margin-top:0px">
										update
										</a>
										</h3>
						</div>
					</div>
				</div>
			</div>
		</div> <!-- .container -->


		`

		const main = document.querySelector('main')
		const title = document.querySelector('title')
		title.innerHTML = 'Update'
		main.innerHTML = html

		var borrarBtn = document.querySelector('#borrar')
		borrarBtn.addEventListener('click', borrar)

		var updateBtn = document.querySelector('#update')
		updateBtn.addEventListener('click', update)
	})
})

function update () {
	debugger;
	let doc = document;
	let key  = doc.getElementById('update').getAttribute('key')
	let Camara  = doc.querySelector('#camara').value
	let Capacidad  = doc.querySelector('#capacidad').value
	let OS  = doc.querySelector('#os').value
var updates = {};

var postData = {
    Camara: descripcion1,
    fecha_alta: fecha_alta,
    genero: genero,
    id: identificador,
    nombre: nombre1,
    precio: precio1,
    url: url
};



updates['/categoria/' + key] = postData;

console.log(updates)

firebase.database().ref().update(updates);

page.redirect('/inicio')
}

function borrar () {
	let doc = document;
	let key  = doc.getElementById('borrar').getAttribute('key')

	var confirmarBorrado = confirm("prueba")

	console.log(confirmarBorrado)

	if (key!=null && confirmarBorrado == true) {
		var ref = db.ref("Categoria")
		ref.child(key).remove()

		page.redirect('/inicio')
	}
}
