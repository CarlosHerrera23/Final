const templateDetalle = (equipo) => {
  return `
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
              <p><strong>OS:</strong> ${equipo.OS}</p>
                 <h2 style="cursor:pointer" id="atras1" onclick="history.back()" ><p align="right">Atras</p></h2>
              </div>
            </div>
          </div>

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
    
      <!--<div class="row">
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
      </div>--> 
  </div>   
    </form>
  </div>
  </div>
  <div id="ver123"></div>
        </div>        
      </div>
  <div class="row">
    <div class="col s12" id="botones">
     <a class="waves-effect waves-light btn"  id="actualizar" class ="button" key="${equipo.id}" img="${equipo.URL}">Modificar</a>

        </div>
      </div>


  `

}

module.exports = templateDetalle
