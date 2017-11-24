const template = (equipo) => {
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

               <div>
              
                <a id="borrar" key="${equipo.id}" class= "button" style = "margin-top:50px; cursor:pointer">borrar</a>
                   </div>

                 <h2 style="cursor:pointer" id="atras1" onclick="history.back()" ><p align="right">Atras</p></h2>
            
              </div>
            </div>
          </div>
        </div>
      </div>

      
  `
}

module.exports = template