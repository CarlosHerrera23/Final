const contacto = `

<html>
<head>
	<title>Formulario De Contacto</title>
	<meta charset="UTF-8">
	<style type="text/css">
	/*Contactenos*/
body{
    background-image: url(http://www.grupoalldigital.com/entradan/images/2.png);
    background-size: 100vw 137vh;
    background-attachment: fixed;
    margin: 0;
    font-family: monospace;
}

form{
    width: 450px;
    margin: auto;
    background: rgba(0,0,0,0.4);
    box-sizing: border-box;
    margin-top: 20px;
    border-radius: 7px;
}


h2{
    color: #fff;
    text-align: center;
    margin: 0;
    font-size: 30px;
    margin-bottom: 20px;
}

input,textarea{
    width: 100%;
    margin-bottom: 20px;
    padding: 7px;
    box-sizing: border-box;
    font-size: 17px;
    border: none;
}

textarea{
    min-height: 100px;
    max-height: 200px;
    max-width: 100%;
}


#boton{
    background: #31384A;
    color: #fff;
    padding: 20px;
}

#boton:hover{
    cursor: pointer;
}

@media (max-width: 480px){
    form{
        width: 100%;
    }
}

/*Contactenos*/
	</style>
</head>
<body>
	<form action="">
	<h2>CONTACTENOS</h2>
	<input type="text" name="Nombre" placeholder="Nombre">
	<input type="text" name="Correo" placeholder="Correo">
	<input type="text" name="Telefono" placeholder="Telefono">
	<textarea name= "mensaje" placeholder="Escriba aqui Su Comentario nosotros lo llamaremos"></textarea>
	<input type="button" value="Enviar" id="boton">
	</form>
</body>


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

</html>
   
`

export default contacto
