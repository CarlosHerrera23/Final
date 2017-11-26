const template = (datos) => {



  let rows = ''
  let countRow = 1
  let keys = Object.keys(datos)

  keys.map(key => {
    let item = datos[key]
    rows +=  `
    <style type="text/css">
      body{
        background:#000000;
      }
.striped thead th{
    padding:45px;
    color:#fff;
    text-shadow:1px 1px 1px #568F23;
    border:1px solid #93CE37;
    border-bottom:3px solid #9ED929;
    background-color:#9DD929;
    background:-webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0.02, rgb(123,192,67)),
        color-stop(0.51, rgb(139,198,66)),
        color-stop(0.87, rgb(158,217,41))
        );
    background: -moz-linear-gradient(
        center bottom,
        rgb(123,192,67) 2%,
        rgb(139,198,66) 51%,
        rgb(158,217,41) 87%
        );
    -webkit-border-top-left-radius:5px;
    -webkit-border-top-right-radius:5px;
    -moz-border-radius:5px 5px 0px 0px;
    border-top-left-radius:15px;
    border-top-right-radius:15px;
}

         table {
          width: 100%;
          height: ;
          background: #389933;
          color: #fff;
          border-radius: .4em;
          overflow: hidden;
        }
        tr {
    border-color: lighten(#389933, 10%);
      }
        th, td {
           width: 25%;
           text-align: left;
           vertical-align: top;
           border: 1px solid #000;
           border-collapse: collapse;
           padding: 1em !important; 
           caption-side: bottom;
           
        }
        caption {
           padding: 0.3em;
           color: #fff;
            background: #000;
        }
        th, td:before {
        color: #dd5;
  }
        
  
}
</style>
     <tr>
      <td>${countRow++}</td>
      <td><a href="/detalle/${key}" class="letra">${item.Phone}</a></td>
      <td><a class="letra">${item.Color}</a></td>
      
    </tr>
    `
  })

  let table = `
  <table class="striped">
    <thead>
      <tr>
        <th>Numero</th>
        <th>Smartphone</th>
        <th>color</th>
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
          <h2 style="cursor:pointer; color:#FFFFFF;" id="atras1" class="section-title" onclick="history.back()" ><p align="right">Atras</p></h2>
        </div>
      </div>
    </div>
  </div>`

  return card
}

module.exports = template