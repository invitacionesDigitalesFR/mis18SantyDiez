// Fecha del evento (1 de febrero de 2025 a las 20:00:00)
const fechaEvento = new Date("2025-02-01T20:00:00").getTime();

// Actualiza el contador cada segundo
const contador = setInterval(() => {
    const ahora = new Date().getTime(); // Obtiene la fecha y hora actual
    const distancia = fechaEvento - ahora; // Calcula la distancia entre el evento y ahora

    // Calcula días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Actualiza los elementos HTML
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    // Si el evento ya pasó, muestra un mensaje
    if (distancia < 0) {
        clearInterval(contador); // Detiene el contador
        document.getElementById("contador").innerText = "¡El evento ha comenzado!";
    }
}, 1000);
