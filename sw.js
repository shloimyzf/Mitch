importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCMcxuH-8Pc0t8eC71xOU8TXLu0ZoF-RG4",
  projectId: "mitches-coffee", 
  messagingSenderId: "789709713646",
  appId: "1:789709713646:web:3f09ce026b40a85b3f03ff"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// --- FORCE UPDATE (Fixes the "Stuck" issue) ---
self.addEventListener('install', (event) => {
    self.skipWaiting(); // Installs immediately
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim()); // Takes control immediately
});
