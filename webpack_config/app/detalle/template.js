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
               <div class="addtocart-bar" class="col-md-12" style = "text-align:center" >
                      <h3><a id="borrar"  class= "button"style = "margin-top:50px; cursor:pointer"><p align="right">borrar</a></h3>
                      <h3><a id="carrito"  class= "button"style = "margin-top:50px;cursor:pointer"><p align="right">Añadir Carrito</a></h3>
                      <h3><a style = "margin-top:0px;cursor:pointer" class="button"><p align="right">Actualizar</a></h3>
                      </div>

                 <h2 style="cursor:pointer" id="atras1" class="section-title" onclick="history.back()" ><p align="right">Atras</p></h2>
            
              </div>
            </div>
          </div>
        </div>
      </div>

  `
   var borrarBtn = document.querySelector('#borrar')
   borrarBtn.addEventListener('click', borrar)

  function borrar () {
        let doc = document;
        let key  = doc.getElementById('borrar').getAttribute('key')


        var confirmarBorrado = confirm("prueba")

        console.log(confirmarBorrado)

        if (key!=null && confirmarBorrado == true) {
          var ref = db.ref("Categoria")
          ref.child(key).remove()

          page.redirect('/homepage')
        }
      }
}

module.exports = template