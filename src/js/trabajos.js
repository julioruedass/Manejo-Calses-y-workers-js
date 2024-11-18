let counter =0;
/*
    function countNumbers() {     
        cont++;
        postMessage(cont); // Enviar mensaje al hilo principal
        setTimeout(countNumbers, 1000); // Llamar a la función cada segundo
    }
    countNumbers();
*/
// Escucha el primer mensaje desde el hilo principal
onmessage = (event) => {
    // Inicializa el contador con el valor recibido  
    counter = event.data;
    // Comienza el bucle de incremento
    function incrementCounter() {
        counter++;
        postMessage(counter); // Envía el valor actualizado al hilo principal
        setTimeout(incrementCounter, 1000); // Repite cada segundo
    }
    incrementCounter(); // Llama a la función inicial
};