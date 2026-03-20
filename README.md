<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>ONG JUNTOS CREANDO FUTURO</title>
<link rel="stylesheet" href="styles.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
      <div class="menu-toggle" onclick="toggleMenu()">☰</div>

<!-- NAVBAR -->
<nav>
  <h2>ONG JUNTOS CREANDO FUTURO</h2>
  <img src="img/logo.png" class="logo">
  <div>
    <a href="index.html">Inicio</a>
    <a href="nosotros.html">Quiénes somos</a>
    <a href="contacto.html">Contacto</a>
  </div>
</nav>

<!-- HERO CON FONDO -->
<section class="hero">
  <div class="overlay">
    <h1>Transformando el futuro de la infancia</h1>

    <!-- LOGO -->
    <img src="img/logo.png" class="logo">

    <p>Apoyamos a niños y familias</p>
  </div>
</section>

<!-- DOCUMENTOS -->
<section class="documentos">
  <h2>Documentos</h2>

  <div class="doc-grid">

    <a href="documento.html?doc=estados-financieros.pdf&titulo=Estados Financieros" class="doc-btn">
      Estados financieros
    </a>

    <a href="documento.html?doc=ley-20032.pdf&titulo=Información art. N°15 ley 20.032" class="doc-btn">
      Información art. N°15 ley 20.032
    </a>

    <a href="documento.html?doc=mdp.pdf&titulo=MDP" class="doc-btn">
      MDP
    </a>

    <a href="documento.html?doc=convenios-proteccion.pdf&titulo=Convenios Servicio Protección" class="doc-btn">
      Convenios Servicio Protección
    </a>

    <a href="documento.html?doc=convenios-mejor-ninez.pdf&titulo=Convenios Mejor Niñez" class="doc-btn">
      Convenios Mejor Niñez
    </a>

    <a href="documento.html?doc=memoria.pdf&titulo=Memoria 2024-2025" class="doc-btn">
      Memoria 2024-2025
    </a>

    <a href="documento.html?doc=gastos.pdf&titulo=Gastos administrativos" class="doc-btn">
      Gastos administrativos
    </a>

    <a href="documento.html?doc=indicadores.pdf&titulo=Indicadores de gestión" class="doc-btn">
      Indicadores de gestión
    </a>

    <a href="documento.html?doc=equipos.pdf&titulo=Equipos y proyectos" class="doc-btn">
      Equipos y proyectos
    </a>

    <a href="documento.html?doc=recursos.pdf&titulo=Recursos recibidos" class="doc-btn">
      Recursos recibidos
    </a>


  </div>
</section>

<a href="https://wa.me/56912345678?text=Hola%20me%20gustaria%20ayudar%20a%20la%20ONG" 
   target="_blank" id="whatsappFloat">

  <img src="img/whatsapp.png">

</a>
<!-- CHAT IA -->
<button id="chatBtn">💬</button>

<div id="chatBox">
  <div id="messages"></div>
    <button onclick="responder('quienes son')">¿Quiénes somos?</button>
    <button onclick="responder('mision')">Misión</button>
    <button onclick="responder('vision')">Visión</button>
    <button onclick="responder('contacto')">Contacto</button>
    <button onclick="responder('direccion')">Dirección</button>
        <button onclick="responder('Que escribo para contactarlos')">Que escribo para contactarlos</button>
  <input type="text" id="userInput" placeholder="Escribe...">

</div>


<script src="script.js"></script>

</body>
</html>
