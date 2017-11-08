

const lista = (datos) => {
  let rows = ''
  let countRow = 0
  let keys = Object.keys(datos)

	keys.map(key => {
    let item = datos[key]
    rows +=  `
     <tr>
      <td>${countRow++}</td>
      <td><a href="/detalle/${key}">${item.Equipos Moviles}</a></td>
      
    </tr>
    `
  })

  let table = `
  <table class="striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Equipos Moviles</th>
        
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>`

  let card = `
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Lista </span>
          ${table}
        </div>
      </div>
    </div>
  </div>`

  return card
}
export default lista