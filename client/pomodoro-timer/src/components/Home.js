import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Music from "./Music"
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
  IonModal,
  IonCol,
  IonGrid,
  IonIcon,
} from "@ionic/react";
import "@ionic/core/css/ionic.bundle.css";
import {informationCircleOutline} from "ionicons/icons";

function Home(props) {

  const[showModal, setShowModal] = useState(false);

  return (
    
    <IonPage>
      <IonContent>
      <IonModal isOpen={showModal} cssClass='my-custom-class'>
        <img src="https://images.ctfassets.net/24wp3v32jh7l/7vtZAqARrQFRHmi63qRjBg/5d107d4dec57bc267c5d08338b9d0792/productivity-method_pomodoro-summary.jpg" />
        <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
      </IonModal>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pomodoro Timer</IonTitle>
          <IonButton slot="end" color = "dark" onClick={() => setShowModal(true)} >
            <IonIcon icon={informationCircleOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow>
          <IonCol>
            <Timer />
            <Music />
          </IonCol>
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
}
export default Home;
