import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

const firebaseConfig = {
  apiKey: "AIzaSyDvZbwlN8X5H9BdiCIRv9HM927SDk4AbPY",
  authDomain: "awesome-todo-list-2d544.firebaseapp.com",
  databaseURL: "https://awesome-todo-list-2d544-default-rtdb.firebaseio.com",
  projectId: "awesome-todo-list-2d544",
  storageBucket: "awesome-todo-list-2d544.firebasestorage.app",
  messagingSenderId: "846073225490",
  appId: "1:846073225490:web:be6cb6fa557a599891d3cb",
  measurementId: "G-3XW5H3HKQG"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), 
    provideFirestore(() => getFirestore()),
  ]
};
