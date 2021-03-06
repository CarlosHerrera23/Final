const template = (equipo) => {
  return `
  <style type="text/css">
  .button{
    text-decoration: none;
    padding: 10px;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    background-color: #1883ba;
    border-radius: 6px;
    border: 2px solid #0016b0;
  }
  .button:hover{
    color: #1883ba;
    background-color: #ffffff;
  }
  .atras4{
    text-decoration: none;
    padding: 10px;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    background-color: #1883ba;
    border-radius: 6px;
    border: 2px solid #0016b0;
  }
  .atras4:hover{
    color: #1883ba;
    background-color: #ffffff;
  }
</style>
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <span class="card-title">${equipo.Phone}</span>
              <br><br><br>
              <p><strong>Equipo:</strong> ${equipo.Phone}</p>
              ${
                equipo.URL
                ?
                ` 
                  <figure>
                  <br><br>
                    <img src=${equipo.URL}/>
                  </figure>`
                : ''
              }
              <p><strong>Camara:</strong> ${equipo.Camara}</p>
              <p><strong>Capacidad:</strong> ${equipo.Capacidad}</p>
              <p><strong>Color:</strong> ${equipo.Color}</p>
              <p><strong>OS:</strong> ${equipo.OS}</p>


               <div>
              <br>
                <a id="borrar" key="${equipo.id}" class= "button" style = "margin-top:50px; cursor:pointer">borrar</a>
                   </div>
                    <br>
                    <a id="borrar" class="atras4" id="atras1" onclick="history.back()" >Atras</a>
              </div>
            </div>
          </div>
          <br><br><br>
           <div class="col s12 m6">  
         <div class="row">
  <form class="col s12">
    <div class="card tarjeta" style="padding-bottom:10px">
     <div class="card-content letra" >
     <span class="card-title">Editar Productos</span>
      <div class="row">
        <div class="input-field col s6">
          <input id="Phone" type="text" class="validate">
          <label for="Phone">Equipo</label>
        </div>
        <div class="input-field col s6">
          <input id="Camara" type="text" class="validate">
          <label for="Camara">Camara</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="Capacidad" type="text" class="validate">
          <label for="Capacidad">Capacidad</label>
        </div>        
        <div class="input-field col s6">
          <input id="OS" type="text" class="validate">
          <label for="OS">OS</label>
        </div>
        <div class="input-field col s6">
          <input id="Color" type="text" class="validate">
          <label for="Color">Color</label>
        </div>
      <div class="row">
        <div class="col s12">
          <div class="file-field input-field">
            <div class="btn">
              <span>Selecionar Imagen</span>
              <input type="file" id="file">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
        </div>
      </div>  
      </div>
  </div>   
    </form>
  </div>
  </div>
  <div id="ver123"></div>
        </div>        
      </div>
  <div class="row">
    <div class="col s12" id="botones">
     <a class="waves-effect waves-light btn" style="cursor:pointer"  id="actualizar" class ="button" key="${equipo.id}" img="${equipo.URL}">Modificar</a>

       
        </div>

      </div>

      
  `
}

module.exports = template