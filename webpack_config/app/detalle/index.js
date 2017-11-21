import firebase from 'firebase'

if (!firebase.apps.length) {
	firebase.initializeApp(config)
}
var index2 = ''
var htmlcate2 = ''
var db = firebase.database()
const detalle = () => {
	var html2 = ''
	const obtenerDatos= function (datos) {
		var arrayDatos = datos.val()
		var keys = Object.keys(arrayDatos)  
		let countRow = 0

		for (var i = 0; i < keys.length; i++) {
			var key = keys[i]
			var equipo2 = arrayDatos[key]

		htmlcate2 = `

					<br><br><br>
					<right><font size=6>SmartPhone</font></right>
					<br>
					<br>
					<br><br><br><br>
					<table align="center" width="*%"  cellspacing=1 cellpadding=1>
					<tr><td>
					<img src=${equipo2.URL}></td>
					<td><font size=5 face="impact" color=#808080> Equipo : ${equipo2.Phone}<br>
						 Camara : ${equipo2.Camara}<br> 
						 Capacidad : ${equipo2.Capacidad}<br> 
						 Color : ${equipo2.Color}<br>  
						 OS : ${equipo2.OS}<br></td>
					</font></tr></table> 
				   `


			html2 += htmlcate2	
			
			}




		index2 = `
		<style type="text/css">
			#atras1{cursor:pointer;}
		</style>
		
					<section>
					<header>
						<h1 class="section-title">Equipos Moviles</h1>
						<h2 id="atras1" class="section-title" onclick="history.back()" ><p align="right">Atras</p></h2>
						</header>
						<div class="product-list">
							${html2}
						</div>
					</section>
				
		`


		const main = document.querySelector('main')
		main.innerHTML = index2

		/*console.log(keys)
		console.log(equipo)
		console.log(arrayDatos)*/
		console.log(datos)
		
	}

	db.ref('Categoria').once('value').then(obtenerDatos)


	/*const main = document.querySelector('main')
	main.innerHTML = layout(categoria)*/
}

export default detalle