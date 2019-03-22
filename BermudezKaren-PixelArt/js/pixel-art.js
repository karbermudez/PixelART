var nombreColores = ['White', 'LightYellow',
'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
//variables globales para diferentes funciones.
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var mouse
var colorActual = nombreColores[Math.round(Math.random() * (nombreColores.length -1))];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function (pixel) {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
   // $('#indicador-de-color').css("background-color", colorActual);
  })
);

//funcion para crear la paleta de colores y evento para seleccionar uno.
function paletaColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var color = nombreColores[i];
    var nuevoDiv = document.createElement("div");
    $(nuevoDiv).css("background-color", color);
    paleta.appendChild(nuevoDiv);
    nuevoDiv.addEventListener('click', selectorDeColor);
  }
}
paletaColores();

//funcion para crear la grilla de pixeles + eventos al utilizar el mouse dentro.
function grillaDePixeles() {
  for (var i = 0; i < 1750; i++) {
    var pixelDiv = document.createElement("div");
    pixelDiv.className = "pixel";
    grillaPixeles.appendChild(pixelDiv);
  }
}
grillaDePixeles();
grillaPixeles.addEventListener('mousedown', manejarClick);

//funcion para seleccionar color.

function selectorDeColor() {
  colorActual = this.style.backgroundColor;
  $('#indicador-de-color').css("background-color", colorActual);
}


//funciones para manejar los eventos del mouse
function manejarClick(e) {
  mouse = true;
  var pixelActual = e.target;
  pintar(pixelActual);
  grillaPixeles.addEventListener('mouseover', manejarMovimientoDeMouse);
  document.addEventListener('mouseup', soltarMouse)
}
function manejarMovimientoDeMouse(e) {
  if (mouse) {
    var pixelActual = e.target;
    pintar(pixelActual);
  }

}
function soltarMouse() {
  mouse = false
  document.removeEventListener('mouseup', soltarMouse)
  grillaPixeles.removeEventListener('mouseover', manejarMovimientoDeMouse);
}
// funcion para pintar los pixeles.
function pintar(pixel) {
  $(pixel).css("background-color", colorActual);
}

//funcion para borrar todo
$("#borrar").click(function () {
  $("#grilla-pixeles").children().animate({ backgroundColor: "#white" }, 2000);
});

//funcion para descargar la imagen creada.
$("#guardar").click(guardarPixelArt);


/*funcion para seleccionar un superheroe y poder pintar sobre.*/

$("#batman").click(function(){
  cargarSuperheroe(batman)
});
$("#wonder").click(function(){
  cargarSuperheroe(wonder)
});
$("#flash").click(function(){
  cargarSuperheroe(flash)
});
$("#invisible").click(function(){
  cargarSuperheroe(invisible)
});

