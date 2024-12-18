
import OpenSeadragon from 'openseadragon';

OpenSeadragon({
  id: "openseadragon", // ID del contenedor
  prefixUrl: "/assets/openseadragon/images/", // Ruta de las imágenes de botones
  tileSources: {
    type: "image",
    url: "/images/capture.png", 
  }, visibilityRatio: 1,        // Permite ver más allá de los límites
  minZoomLevel: 1,           // Nivel de zoom mínimo
  defaultZoomLevel: 2,       // Nivel de zoom inicial
  maxZoomLevel: 20,          // Aumenta el zoom máximo permitido
  zoomPerScroll: 2.0,   // Ruta a tu imagen
});