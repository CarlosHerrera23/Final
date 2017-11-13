var page = require('page')
var firebase = require('firebase')
var config = require('./config')

if (!firebase.apps.length) { 
	firebase.initializeApp(config) 
}

// template
var loginTemplate = `
<style type="text/css">

body{
    background-image: url(https://static1.squarespace.com/static/541ca6ace4b09194f7659e16/t/541fb564e4b0a6db31384587/1411364199494/bridge-lake-bokeh-hd-wallpaper.jpg?format=1500w);  
    background-size: 100vw 100vh;
      background-attachment: fixed;
      margin: 0;
      font-family: monospace;
      padding: 10em;
  }

</style>
<br>
<h4 id ="letra" class="card-title center">Entrar / Salir</h4>
         	<div class="row">
	         	<div class="row center">
	         	  <br>
	         		<p align="center">
						<a id="googleLogin" class="loginBtn loginBtn--google">Login with Google</a></p>
	         	</div>
         	</div>
         		<form>
         		  <br >
         			<p align="center">
         		        <input type="button" id="botonatras" value="<-------  Atras <-------" name="Atrás" onclick="history.back()" /></p>
                </form>

         	`

var template = `
    <div class="row">
      <div class="col s12 l12">
        <div class="card-panel login-container">
        	${loginTemplate}
        </div>
      </div>
    </div> `

// página de login
page('/login', () => {
	var main = document.querySelector('main')

  main.innerHTML = template

  var btnLogin = document.querySelector('#googleLogin')
  if (btnLogin) btnLogin.addEventListener('click', login)
})

// login
function login (e) {
	e.preventDefault()

	let provider = new firebase.auth.GoogleAuthProvider()

	firebase.auth().signInWithPopup(provider)
		.then(result => {
			let user = result.user.providerData[0]

			let loginContainer = document.querySelector('.login-container')

			let html = `Bienvenido, ${user.displayName} <img style="height: 50px; border-radius: 50%;" class="photoURL" src=${user.photoURL} alt=${user.displayName} />`
			loginContainer.innerHTML = `
				${html}
				<li><a id="salir" href="!#">Salir</a></li>`

			var btnSalir = document.querySelector('#salir')
			btnSalir.addEventListener('click', logout)
		})
		.catch((err) => console.error(err.message) )
}

// cerrar sesión
function logout (e) {
	e.preventDefault()

	firebase.auth().signOut().then(() => {
		let loginContainer = document.querySelector('.login-container')
	  loginContainer.innerHTML = loginTemplate
	  var btnLogin = document.querySelector('#googleLogin')
	  if (btnLogin) btnLogin.addEventListener('click', login)
		})
		.catch((error) => {
			console.log(err.message)
	})
}