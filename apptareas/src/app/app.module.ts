import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBqbbheM6uJJplBQ9B_jg5ijw07gK7BIS0",
  authDomain: "app-tareas-9f78d.firebaseapp.com",
  projectId: "app-tareas-9f78d",
  storageBucket: "app-tareas-9f78d.appspot.com",
  messagingSenderId: "854802728008",
  appId: "1:854802728008:web:d6a3e6adec558b1d8e447d",
  measurementId: "G-NGBK6PS4MG"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp( firebaseConfig )),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
