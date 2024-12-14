const CACHE_NAME = 'serviapp-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Mensaje para registrar visita
self.addEventListener('message', (event) => {
  if (event.data.type === 'TRACK_VISIT') {
    const visitData = event.data.data;
    
    // Almacenar datos en localStorage
    localStorage.setItem('deviceId', visitData.deviceId);
    localStorage.setItem('lastVisit', visitData.timestamp);
    localStorage.setItem('visitCount', visitData.visitCount.toString());
    
    // Enviar confirmación al cliente
    event.source.postMessage({
      type: 'VISIT_TRACKED',
      data: visitData
    });
  }
}); 