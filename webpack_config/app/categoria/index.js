import firebase from 'firebase'
import config from './config'

if (!firebase.apps.length) {
	firebase.initializeApp(config)
}
var index = ''
var htmlcate = ''
var db = firebase.database()
const categoria = () => {
	var html = ''
	const obtenerDatos= function (datos) {
		var arrayDatos = datos.val()
		var keys = Object.keys(arrayDatos)  
		let countRow = 0

		for (var i = 0; i < keys.length; i++) {
			var key = keys[i]
			var equipo = arrayDatos[key]
			

		htmlcate = `

					<br><br><br>
					<center><font size=6>SmartPhone</font></center>
					<br>
				  <center><font size=5>Equipo :</font></center>
				  <center><a href="/detalle"><img src=${equipo.URL}></a></center>
				  
			`
			html += htmlcate	
			 
			}




		index = `
		<style type="text/css">
		atras1{
			font:blod 50px Broadway;
			color:#f2f2f2;
		}
		#atras1{
			cursor:pointer;
		}
		</style>
		<main class="main-content">
			<div class="container">
				<div class="page">
					<section>
					<header>
						<h1 class="section-title">Equipos Moviles</h1>
						<h2 id="atras1" class="section-title" onclick="history.back()" ><p align="right">Atras</p></h2>
					</header>
						<div class="product-list">
						${html}
						</div>
					</section>
				</div> 
			</div>
		</main> 
		`


		const main = document.querySelector('main')
		main.innerHTML = index

		console.log(keys)
		console.log(key)
		console.log(equipo)
		console.log(arrayDatos)
		console.log(datos)
		
	}

	db.ref('Categoria').once('value').then(obtenerDatos)


	/*const main = document.querySelector('main')
	main.innerHTML = layout(categoria)*/
}

export default categoria

