//---SLIDER---//
var slider = document.getElementById("myRange2");
//---KILOS---//
var output4 = document.getElementById('demo4');
//---LITROS DE AGUA---//
var output5 = document.getElementById('demo5');
//---PERSONAS---//
var output6 = document.getElementById('demo6');

output4.innerHTML = slider.value;
output5.innerHTML = slider.value * 4800;
output6.innerHTML = slider.value * 3;

slider.oninput = function() {
  output4.innerHTML = slider.value;
  output5.innerHTML = slider.value * 4800;
  output6.innerHTML = slider.value * 3;

  const kilosCerdo = parseInt(this.value);
  const personasCerdo = (kilosCerdo * 3).toString();

  const otrasImagenesCerdo = document.getElementsByClassName("imagen-persona");
  for (var i = 0; i < otrasImagenesCerdo.length; i++) {
    otrasImagenesCerdo[i].classList.add("oculto");
  }

  const imagenSeleccionadaCerdo = document.getElementById(personasCerdo);
  imagenSeleccionadaCerdo.classList.remove("oculto");
};
