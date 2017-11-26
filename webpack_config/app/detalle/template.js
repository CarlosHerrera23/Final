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
        </div>
      </div>

      
  `
}

module.exports = template