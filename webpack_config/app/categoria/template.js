const template = (datos) => {
  let rows = ''
  let countRow = 1
  let keys = Object.keys(datos)

  keys.map(key => {
    let item = datos[key]
    rows +=  `
     <tr>
      <td>${countRow++}</td>
      <td><a href="/detalle/${key}" class="letra">${item.Phone}</a></td>
      <td></td>
    </tr>
    `
  })

  let table = `
  <table class="striped">
    <thead>
      <tr>
        <th>Numero</th>
        <th>Smartphone</th>
        <th>Precio</th>
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
          <span class="card-title">Lista de datos</span>
          <br><br><br><br>
          ${table}
          <h2 style="cursor:pointer" id="atras1" class="section-title" onclick="history.back()" ><p align="right">Atras</p></h2>
        </div>
      </div>
    </div>
  </div>`

  return card
}

module.exports = template