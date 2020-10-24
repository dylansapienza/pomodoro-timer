import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import {
  IonApp,
  IonHeader,
  IonTitle,
  IonCard,
  IonToolbar,
  IonCardContent,
  IonCardTitle,
  IonPage,
  IonContent,
  IonCardHeader,
  IonCardSubtitle,
  IonButton,
  IonText,
  IonLabel,
  IonRow,
  IonCol,
  IonGrid,
} from "@ionic/react";
import "@ionic/core/css/ionic.bundle.css";

function Home(props) {


  return (
    
    <IonPage>
      <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pomodoro Timer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard color="danger">
              <IonCardTitle>
              <p color="dark" style={{ color: "black", fontSize: 20, fontWeight: 600, textAlign: "center"}}>Timer</p>
              </IonCardTitle>
              <IonCardContent>
                <Timer />
              </IonCardContent>
              {/* <IonButton color="dark" class="center">Start Pomodoro</IonButton> */}
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
}
export default Home;
