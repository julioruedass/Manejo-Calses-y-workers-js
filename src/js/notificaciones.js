class NotificationManager {
    constructor() {
        this.messages = []; // Almacena los mensajes
        this.container = document.getElementById("notificationContainer");
        this.counter =0
    }

    /**
     * Agrega un mensaje a la lista y al contenedor.
     * @param {string} message - El mensaje a agregar.
     */
    addMessage(message) {
        this.messages.push(message);
        this.counter++;
        // Crear un nuevo elemento DOM para el mensaje
        const messageElement = document.createElement("div");
        messageElement.className = "notificationMessage";
        messageElement.textContent = message;
        messageElement.id = "id_"+this.counter;
        // Agregar el mensaje al contenedor
        this.container.appendChild(messageElement);
        this.showNotifications() 
    }

    dellete_last_Message(){
        if (this.counter>0 ){
            let chillast2   = this.container.lastChild ;
            let chillast   = document.getElementById("id_" + this.counter) ;
            let ultimo     = this.messages[this.messages.length-1] ;
            console.log("#antes mensajes   : " + this.messages.length) ;
            console.log("Mensaje eliminado : " + ultimo) ;
            console.log("Mensaje de noti   : " + chillast.textContent) ;
            if (chillast.isEqualNode(chillast2) ){
                console.log("Es consistente la eliminacion");
            }else{
                console.log("No es consistente la eliminacion");
            }
            this.container.removeChild(chillast) ;
            this.messages.pop();
            this.counter-- ;
                if (  this.counter <=0) {
                    
                    this.hideNotifications();
                    }else{
                        console.log("#despues mensajes : " + this.messages.length) ;
                        chillast   = document.getElementById("id_" + this.counter) ;
                        console.log("Mensaje de noti   : " + chillast.textContent) ;
                    }
          
        }else{
            console.log("No hay mensajes para eliminar");
        }


    }

    dellete_all_Message(){
        this.counter=0      ;
        this.messages =[]   ; // Vaciar el arreglo
        this.container = ''; // Limpiar el contenedor de notificaciones
       // this.hideNotifications(); // Opcional: Oculta el contenedor
    }

    /* Muestra las notificaciones en la pantalla.*/
    showNotifications() { 
        if (  this.counter >0) {
          this.container.style.display = "block";
        }
    }

    /* Oculta las notificaciones.*/
    hideNotifications() {
        this.container.style.display = "none";
    }

}

    // Crear instancia de la clase NotificationManager
    const notificationManager = new NotificationManager();

    // Botón para agregar notificaciones
    document.getElementById("addMessageBtn").addEventListener("click", () => {
        const message = `Notification #${notificationManager.messages.length + 1}`;
        notificationManager.addMessage(message);
    });

    // Botón para mostrar notificaciones
    document.getElementById("showNotificationsBtn").addEventListener("click", () => {
        notificationManager.showNotifications();
    });

    // Botón para ocultar notificaciones
    document.getElementById("hideNotificationsBtn").addEventListener("click", () => {
        notificationManager.hideNotifications();
    });

    // Botón para eliminar ultima notificaciones
    document.getElementById("delletelastNotificationsBtn").addEventListener("click", () => {
        notificationManager.dellete_last_Message();
    });

    // Botón para ocultar notificaciones
    document.getElementById("delletealltNotificationsBtn").addEventListener("click", () => {
        notificationManager.dellete_all_Message();
    });