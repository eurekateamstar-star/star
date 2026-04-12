
 
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');
 
firebase.initializeApp({
    apiKey: "AIzaSyCzxANy8mkN8BzsGr0SDvGLW_AJ43kRQ1Q",
    authDomain: "star-c5e91.firebaseapp.com",
    projectId: "star-c5e91",
    storageBucket: "star-c5e91.firebasestorage.app",
    messagingSenderId: "804810488246",
    appId: "1:804810488246:web:477340ff049b90ed68e917"
});
 
const messaging = firebase.messaging();
 
// 背景收到推播時的處理（瀏覽器關閉或最小化時）
messaging.onBackgroundMessage((payload) => {
    const { title, body } = payload.notification;
    self.registration.showNotification(title, {
        body,
        icon: '/icon-192.png',   // 可換成你自己的 icon
        badge: '/icon-192.png',
        vibrate: [200, 100, 200],
        data: { url: payload.data?.url || '/' }
    });
});
 
// 點擊通知時開啟網頁
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const url = event.notification.data?.url || '/';
    event.waitUntil(clients.openWindow(url));
});
