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

			<footer>
			
			<div class="sociales">
			<p id="letra" class="copy">TechMarts &copy; 2017</p>
				<a href="https://www.facebook.com/">
				<img id="uno" name="facebook" src="https://image.flaticon.com/icons/svg/185/185981.svg"></a>
				<a href="https://twitter.com/">
				<img id="uno" name="twiter" src="https://image.flaticon.com/icons/svg/185/185961.svg"></a>
				<a href="https://www.instagram.com/?hl=es-la">
				<img id="uno" name="instagram" src="https://image.flaticon.com/icons/svg/174/174855.svg"></a>
				<a href="https://github.com/CarlosHerrera23">
				<img id="uno" name="github" src="https://image.flaticon.com/icons/svg/25/25471.svg"></a>
				<a href="https://www.youtube.com/">
				<img id="uno" name="youtube" src="https://image.flaticon.com/icons/svg/185/185983.svg"></a>
				<a href="https://plus.google.com/">
				<img id="uno" name="gplus" src="https://image.flaticon.com/icons/svg/185/185963.svg"></a>
				<a href="https://www.twitch.tv/">
				<img id="uno" name="twitch" src="https://image.flaticon.com/icons/svg/167/167304.svg"></a>
			</div>
		</div>
	</footer>

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

