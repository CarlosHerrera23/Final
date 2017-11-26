import config from './../config'
import firebase from 'firebase'
import page from 'page'

if (!firebase.apps.length) {
	firebase.initializeApp(config)
}

var db = firebase.database()

page('/guardar',() => {
	const main = document.querySelector('main')
	main.innerHTML = formTemplate
	var guardarBtn = document.querySelector('#guardar')
	guardarBtn.addEventListener('click', guardar)

	var inputFile = document.getElementById('file')
	inputFile.addEventListener('change', seleccionarImagen, false)
})


var formTemplate = `


<div class="page">
	<form>
		<table class="cart">
			<tbody>
				<tr>
					<td class="product-name">
						<div class="row">
						<section>
					<header>
						<h1 class="section-title">Guardar Nuevo Datos</h1>
						<h2 style ="cursor:pointer" id="atras1" class="section-title" onclick="history.back()" ><p align="right">Atras</p></h2>
					</header>
					</section>
					<br>
							<div class="col-md-6" style ="text-align:right">
								<h2 class="section-title">Camara</h2>
								<input type="text" placeholder="Pixeles de la camara" id="Camara">
							</div> <!-- .column -->
							<div class="col-md-6" style ="text-align:right">
								<h2 class="section-title">Capacidad</h2>
								<input type="text" placeholder="capacidad del equipo en GB" id="Capacidad">
							</div> <!-- .column -->
							<div class="col-md-6" style ="text-align:right">
								<h2 class="section-title" >Color</h2>
								<input type="text" placeholder="Color del Dispositivo" id="Color">
							</div> <!-- .column -->
							<div class="col-md-6" style ="text-align:right">
								<h2 class="section-title">OS</h2>
								<input type="text" placeholder="Vercion Android o IOS" id="OS">
							</div> <!-- .column -->
							<div class="col-md-6" style ="text-align:right">
								<h2 class="section-title">Phone</h2>
								<input type="text" placeholder="Nombre Del Equipo" id="Phone">
							</div> <!-- .column -->
							<div class="col-md-6" style ="text-align:right">
								<div class="file-field input-field" style=" margin-top:40px" >
									<div class="btn">
										<span>Archivo</span>
										<input type="file" id="file">
									</div>
								</div>
							</div>
							<div class="col-md-6" style ="text-align:right">
								<!--<h2 class="section-title">fecha</h2>
								<input type="text" placeholder="Nombre" id="fecha">-->
							</div> <!-- .column -->
							<div class="col-md-12" style = "text-align:right; cursor:pointer" >
								<a id="guardar">Guardar</a>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	<form>
</div>	
<br><br><br><br><br><br>

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

var fileSelected = null

function guardar (e){

	e.preventDefault()

	var storageRef = firebase.storage().ref()
	var thisRef = storageRef.child(fileSelected.name);

	thisRef.put(fileSelected)
	.then((snapshot) => {
		return snapshot.downloadURL
	})
	.then(imgURL => {
		var ref = db.ref("Categoria")
		ref.push({
			Camara: document.querySelector('#Camara').value,
			Capacidad: document.querySelector('#Capacidad').value,
			Color: document.querySelector('#Color').value,
			OS: document.querySelector('#OS').value,
			Phone: document.querySelector('#Phone').value,
			URL: imgURL
		})

		page.redirect('/categoria')
	})
	.catch(err => console.error(err))
}

function seleccionarImagen(e) {
	var target = e.target
	fileSelected = target.files[0]
}
