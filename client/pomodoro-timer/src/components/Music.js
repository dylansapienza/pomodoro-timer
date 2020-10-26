import React, { Component, useState, useEffect } from "react";
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
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
} from "@ionic/react";
import {Howl, Howler} from "howler";
import "@ionic/core/css/ionic.bundle.css";
import {playOutline, pauseOutline, refreshOutline} from "ionicons/icons";

function Music(props){

    const [cardColor, setCardColor] = useState("success")


    return(
        <>
        {/* Ternary Operator Inserts Leading Zero For Timer */}
        <IonCard color={cardColor}>
            <IonCardTitle>
            <p color="dark" style={{ color: "black", fontSize: 20, fontWeight: 600, textAlign: "center"}}>Spotify</p>
            
            <IonRow>
                <IonCol style={{textAlign:"center"}}>
                <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3SiCzCxMDOH" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" style={{border:0, borderRadius:20}}></iframe>
                </IonCol>
                <IonCol style={{textAlign:"center"}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Y-JQ-RCyPpQ?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{border:0, borderRadius:20}} allowfullscreen></iframe>
                </IonCol>
            </IonRow>
            </IonCardTitle>
            <IonCardContent>
                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                </IonFab>
            </IonCardContent>
        </IonCard>
        </>
    )

}

export default Music