import React from "react";
import {
  IonApp,
  IonMenu,
  IonCard,
  IonCardContent,
  IonRouterOutlet,
} from "@ionic/react";
import "@ionic/core/css/ionic.bundle.css";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <IonApp>
        <Route exact path="/" component={Home} />
      </IonApp>
    </BrowserRouter>
  );
}

export default App;
