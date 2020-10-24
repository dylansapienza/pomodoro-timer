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
  IonGrid,
} from "@ionic/react";
import "@ionic/core/css/ionic.bundle.css";

function Timer(props){

    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(5);
    const [isRunning, setIsRunning] = useState(false)
    const [cycles, setCycles] = useState(0)



    if(secs < 0){
        setSecs(59)
        setMins(mins - 1)
    }

    if(mins < 0){
        console.log("BEEP BEEP");
        setCycles(cycles + 1)
        setMins(0)
        setSecs(5)
        setIsRunning(false)
        if (cycles % 2 == 0){
            setMins(0)
            setSecs(10)
            setIsRunning(true)
        }
        if (cycles % 4 == 0 && cycles != 0){
            setMins(0)
            setSecs(20)
            setIsRunning(true)
        }
        else{
            setIsRunning(true)
        }
        
        // if (cycles % 5 == 0){
        //     setMins(15)
        //     setIsRunning(true)
        // }
    }

    useEffect(() => {
        if (isRunning){
            const id = window.setInterval(()=>{
            setSecs(secs => secs - 1)
        }, 1000);
            return () => window.clearInterval(id);
      }
    }, [isRunning]);

    return(
        <>
        <p color="dark" style={{ color: "black", fontSize: 90, fontWeight: 600, textAlign: "center"}}>{mins}:{secs}</p>
        <button onClick={() => setIsRunning(false)}> Pause</button>
        <button onClick={() => setIsRunning(true)}> Play</button>
        </>
    )

}

export default Timer