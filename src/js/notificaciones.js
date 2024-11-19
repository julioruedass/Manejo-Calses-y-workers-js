class NotificationManager {
    constructor() {
        this.messages = []; // Almacena los mensajes
        this.container = document.getElementById("notificationContainer");
    }

    /**
     * Agrega un mensaje a la lista y al contenedor.
     * @param {string} message - El mensaje a agregar.
     */
    addMessage(message) {
        this.messages.push(message);

        // Crear un nuevo elemento DOM para el mensaje
        const messageElement = document.createElement("div");
        messageElement.className = "notificationMessage";
        messageElement.textContent = message;

        // Agregar el mensaje al contenedor
        this.container.appendChild(messageElement);
    }

    /**
     * Muestra las notificaciones en la pantalla.
     */
    showNotifications() {
        this.container.style.display = "block";
    }

    /**
     * Oculta las notificaciones.
     */
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