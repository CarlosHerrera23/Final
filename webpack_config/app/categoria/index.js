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

		for (var i = 0; i < keys.length; i++) {
			var key = keys[i]
			var equipo = arrayDatos[key]
			
			
			htmlcate = `
				  <table>
				    <thead>
				    <br >
				    <br >
				    <br >
				      <tr>
				        <th>Celular</th>
				      </tr>
				    </thead>
				  </table>
				  <tr>
				  <th>Nombre Del Equipo : ${equipo.Phone}</th><p>
				  <th>Camara : ${equipo.Camara}</th><p>
				  <th>Capacidad : ${equipo.Capacidad}</th><p>
				  <th>Color : ${equipo.Color}</th><p>
				  <th>OS : ${equipo.OS}</th><p>
				  <th>Imagen : ${equipo.Imagen}</th><p>
				  <span class="card-title">${equipo.Imagen}</span>
				  		${
				  			equipo.Imagen
			                ?
			                ` 
			                  <figure>
			                    <img src=${equipo.Imagen}/>
			                  </figure>`
			                : ''
			              }
				  </tr>
				   
			`
			html += htmlcate	
		}

		index = `
		<main class="main-content">
			<div class="container">
				<div class="page">
					<section>
					<header>
						
							<h1 class="section-title">Equipos Moviles</h1>
							
							<h2 class="section-title" onclick="history.back()" ><p align="right">Atras</p></h2>

						
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

		//console.log(keys)
		console.log(equipo)
		
	}

	db.ref('Categoria').once('value').then(obtenerDatos)


	/*const main = document.querySelector('main')
	main.innerHTML = layout(categoria)*/
}

export default categoria
