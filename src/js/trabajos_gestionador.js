let count;
// Leer o inicializar el contador desde la cookie
function getCookie(name) {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
    }, {});
    return cookies[name] || 0; // Devuelve 0 si la cookie no existe
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
}


function f_get_consecutivo() {
    let count_f = 0;
    try {
        console.log("Iniciado worker(trabajo ) con COOKIE ....")
        let count_pre = parseInt(getCookie('counter'));
        console.log("parse COOKIE .... = " + count_pre)
        count_f = parseInt(count_pre);
        console.log("valor con COOKIE =" + count_f)

    } catch (e) {
        console.log("Mensaje exception : " + e)
        console.log("Iniciado worker(trabajo ) con cero ....")
        count_f = 0;
        console.log("Iniciado worker(trabajo ) con cero =" + count_f)
    }
    return count_f;
}


// Crear un nuevo Worker    
class c_worker {
    constructor(p_count) {
        this.count = p_count;
        this.content = "";
        this.worker = new Worker('src/js/trabajos.js');
        this.worker.postMessage(p_count); // Enviamos el número inicial al Worker                    ;

        this.init();
    }

    init() {
        document.getElementById('stopWorker').addEventListener('click', () => {
            this.worker.terminate();
            document.getElementById('output').textContent = 'Worker stopped.';
        });

        document.getElementById('startWorker').addEventListener('click', () => {
            this.f_inicializar_worker();
        });

        document.getElementById('restartWorker').addEventListener('click', () => {
            this.worker.terminate();
            setCookie('counter', 0, 7);
            document.getElementById('output').textContent = `Count: 0`;

        });
    }

    f_inicializar_worker() {
        this.worker.onmessage = (event) => {
            // Inicializamos el contador desde la cookie o desde 0
            let count = parseInt(getCookie('counter'));
            let valor = `Count: ${event.data}`;
            //console.log("Valor count:" + count)
            //console.log("Valor text_content:" + valor)
            document.getElementById('output').textContent = `Count: ${event.data}`;
            setCookie('counter', event.data, 7); // Guardar el contador en la cookie
        };
    }



}

let i_consecutivo;
// Verificar si la cookie "visits" existe

function f_preparar_trabajo() {
    if (!getCookie('counter')) {
        // Establecer la cookie por primera vez si no existe
        setCookie('counter', 1, 7); // La cookie durará 7 días
        console.log('Cookie "visits" creada por primera vez con valor 1.');
        let i_consecutivo = 1;
    } else {
        i_consecutivo = f_get_consecutivo();
        // Incrementar el valor de la cookie si ya existe
        setCookie('counter', i_consecutivo, 7);
        console.log(`Cookie "visits" actualizada a ${i_consecutivo}.`);
    }

    console.log('Valores : ' + i_consecutivo);
    setCookie('counter', i_consecutivo, 7)
    // Instancia de la clase Worker
    const c_worker_init = new c_worker(i_consecutivo);
}


