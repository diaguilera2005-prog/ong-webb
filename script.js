const respuestas = {
  "hola": "Hola, soy el asistente de Juntos Creando Futuro 😊",
  "quienes son": "Somos una ONG fundada en 2017 enfocada en la protección de niños y adolescentes. 😊",
  "mision": "Nuestra misión es apoyar a niños y familias en situación vulnerable. 😊",
  "contacto": "Puedes escribirnos a ongjcfsb@gmail.com 😊",
  "Que escribo para contactarlos": "Para contactarnos necesitas rellenar el formulario colocando tu nombre, tu correo personal y tu mensionando de que forma quieres aportar 😊",
  "direccion": "Estamos en Los Ángeles, Biobío, Chile. 😊",
  "vision": "Como institucion nuestra Vision es garantizar que ningún niño quede atrás, promoviendo una infancia digna, segura y con igualdad de oportunidades. 😊"
};

// ABRIR CHAT
document.getElementById("chatBtn").onclick = () => {
  let box = document.getElementById("chatBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
};

// RESPUESTA IA
document.getElementById("userInput").addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    let msg = this.value.toLowerCase();

    let userMsg = document.createElement("p");
    userMsg.textContent = "Tú: " + msg;
    document.getElementById("messages").appendChild(userMsg);

    let respuesta = "No tengo esa información aún.";

    for (let clave in respuestas) {
      if (msg.includes(clave)) {
        respuesta = respuestas[clave];
      }
    }

    let botMsg = document.createElement("p");
    botMsg.textContent = "IA: " + respuesta;
    document.getElementById("messages").appendChild(botMsg);

    this.value = "";
  }
});
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
function responder(clave) {

  let userMsg = document.createElement("p");
  userMsg.textContent = "Tú: " + clave;
  document.getElementById("messages").appendChild(userMsg);

  let respuesta = respuestas[clave] || "No tengo esa información aún.";

  let botMsg = document.createElement("p");
  botMsg.textContent = "IA: " + respuesta;
  document.getElementById("messages").appendChild(botMsg);
}