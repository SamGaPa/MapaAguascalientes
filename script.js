// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes
// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: '© OpenStreetMap'
}).addTo(map);

// Añadir un marcador en Aguascalientes capital
var marker = L.marker([21.88234, -102.28259]).addTo(map);
// Añadir un pop-up al marcador
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

var iconPlazaPatria = L.divIcon({
    html: '🏛️',  // Emoji del edificio
    className: 'emoji-icon',  // Clase para aplicar estilos
    iconSize: [40, 40],  // Tamaño del icono
    iconAnchor: [20, 40],  // Punto de anclaje del icono
    popupAnchor: [0, -40]  // Punto donde se abrirá el popup
});

var iconMuseoMuerte = L.divIcon({
    html: '💀',  // Emoji de la calavera
    className: 'emoji-icon',  // Clase para aplicar estilos
    iconSize: [40, 40],  // Tamaño del icono
    iconAnchor: [20, 40],  // Punto de anclaje del icono
    popupAnchor: [0, -40]  // Punto donde se abrirá el popup
});

// Añadir los marcadores personalizados con emojis
var plazaPatria = L.marker([21.88187, -102.29495], {icon: iconPlazaPatria}).bindPopup("<b>Plaza Patria</b><br>Corazón de Aguascalientes.");
var museoMuerte = L.marker([21.88417, -102.28878], {icon: iconMuseoMuerte}).bindPopup("<b>Museo de la Muerte</b><br>Un lugar único.");

// Añadir los marcadores al mapa
plazaPatria.addTo(map);
museoMuerte.addTo(map);

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

// Dibujar un polígono para el Centro Histórico
var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

// Crear capas base
var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};

// Crear capas superpuestas
var overlayMaps = {
    "Lugares importantes": L.layerGroup([plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
};

// Control de capas
L.control.layers(baseMaps, overlayMaps).addTo(map);





   

   