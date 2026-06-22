self.addEventListener('install', (e) => {
  console.log('[Service Worker] Trick House Instalado com Sucesso!');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Ativado e pronto para rodar!');
});

self.addEventListener('fetch', (e) => {
  // Mantém o app funcionando e lendo os arquivos básicos
});