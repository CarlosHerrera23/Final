const acercade = `
<script>
//almacenar slider en variables
var slider = $('#slider');
//almacena botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverDerecha() {
    slider.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
        $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
        slider.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda() {
    slider.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
        slider.css('margin-left', '-'+100+'%');
    });
}
//hacer que el slider sea automático
function autoplay() {
    interval = setInterval(function(){
        moverDerecha();
    }, 5000);
}

siguiente.on('click',function() {
    moverDerecha();
    clearInterval(interval);
    autoplay();
});

anterior.on('click',function() {
    moverIzquierda();
    clearInterval(interval);
    autoplay();
});

autoplay();
</script>
<div id="contenedor-slider" class="contenedor-slider">
 <div id="slider" class="slider">
   <section class="slider__section">
     <div class="slider__contenido">
       <h2 class="slider__contenido__titulo">Quienes Somos</h2>
       <p class="slider__contenido__texto">Una Compañia Que Se Dedica A la Venta De Equipo de Celulares</p>
     </div>
     <img src="https://cdn.wallpapersafari.com/1/98/dZ5tsj.jpg" class="slider__img">
   </section>
   <section class="slider__section">
     <div class="slider__contenido">
       <h2 class="slider__contenido__titulo">La Tienda</h2>
       <p class="slider__contenido__texto">Las Ventas Son Solo En la Web</p>
     </div>
     <img src="https://cdn.wallpapersafari.com/41/29/lvbMFB.jpg" class="slider__img">
   </section>
   <section class="slider__section">
     <div class="slider__contenido">
       <h2 class="slider__contenido__titulo">Que Equipos</h2>
       <p class="slider__contenido__texto">Se Vende Todo Tipo De Equipos</p>
     </div>
     <img src="https://wallpaperscraft.com/image/apple_vs_android_android_competition_26151_1920x1080.jpg" class="slider__img">
   </section>
   <section class="slider__section">
     <div class="slider__contenido">
       <h2 class="slider__contenido__titulo">Se Parte De Nuestros Clientes</h2>
       <p class="slider__contenido__texto">La Tienda Le Ofrece Grandes Procmociones A Sus Clientes</p>
     </div>
     <img src="http://wallup.net/wp-content/uploads/2016/01/140848-3D-anaglyph_3D-cityscape-triangle.jpg" class="slider__img">
   </section>
 </div>
  <div id="btn-prev" class="btn-prev">&#60;</div>
  <div id="btn-next" class="btn-next">&#62;</div>
 </div>

 `

export default acercade