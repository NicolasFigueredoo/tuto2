var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x ;
var y ;
var estado;
var color = document.getElementById("caja_de_color");
var grosor = document.getElementById("rangogrosor");
cuadrito.addEventListener("mousedown", pulsarMouse);
cuadrito.addEventListener("mouseup",levantarMouse);
cuadrito.addEventListener("mousemove", moverMouse);

function pulsarMouse(evento)
{
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function levantarMouse(evento)
{
    estado = 0;
}


function moverMouse(evento)
{
    if(estado == 1)
    {
        dibujarLinea(color.value, x , y , evento.layerX, evento.layerY, papel);
        x = evento.layerX;
        y = evento.layerY;
    }
    else
    {
        x = evento.layerX;
        y = evento.layerY;
    }
}




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = rangogrosor.value;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}