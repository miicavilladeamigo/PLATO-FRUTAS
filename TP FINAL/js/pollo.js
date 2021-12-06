//---SLIDER---//
var slider = document.getElementById("myRange3");
//---KILOS---//
var output7 = document.getElementById('demo7');
//---LITROS DE AGUA---//
var output8 = document.getElementById('demo8');
//---PERSONAS---//
var output9 = document.getElementById('demo9');

output7.innerHTML = slider.value;
output8.innerHTML = slider.value * 3900;
output9.innerHTML = slider.value * 2;
slider.oninput = function() {
  output7.innerHTML = slider.value;
  output8.innerHTML = slider.value * 3900;
  output9.innerHTML = slider.value * 2;

  const kilosPollo = parseInt(this.value);
  const personasPollo = (kilosPollo * 2).toString();

  const otrasImagenesPollo = document.getElementsByClassName("imagen-persona");
  for (var i = 0; i < otrasImagenesPollo.length; i++) {
    otrasImagenesPollo[i].classList.add("oculto");
  }

  const imagenSeleccionadaPollo = document.getElementById(personasPollo);
  imagenSeleccionadaPollo.classList.remove("oculto");
  };
