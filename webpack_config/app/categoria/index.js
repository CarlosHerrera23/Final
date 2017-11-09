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
			'<h1>${equipo.Modelo}</h1>'
			
			htmlcate = `
				  <table>
				    <thead>
				      <tr>
				        <th>Equipo Moviles</th>
				      </tr>
				    </thead>
				  </table>
			`
			html += htmlcate	
		}

		index = `
		<main class="main-content">
			<div class="container">
				<div class="page">
					<section>
						<header>
							<h2 class="section-title">Menu categoria</h2>
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
		
	}

	db.ref('Equipos Moviles').once('value').then(obtenerDatos)


	/*const main = document.querySelector('main')
	main.innerHTML = layout(categoria)*/
}



export default categoria
