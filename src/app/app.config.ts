import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"saladejuegos-d7067","appId":"1:417782346121:web:c6cd6636847ac19aee7158","storageBucket":"saladejuegos-d7067.appspot.com","apiKey":"AIzaSyDqceloFKxtiDqBBwbxWLxguHcaANw8tEU","authDomain":"saladejuegos-d7067.firebaseapp.com","messagingSenderId":"417782346121"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
