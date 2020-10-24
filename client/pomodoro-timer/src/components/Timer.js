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

    //State Variables

    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(5);
    const [isRunning, setIsRunning] = useState(false)
    const [cycles, setCycles] = useState(0)

    //Reset Button - Sets to Pomodoro, 0 Cycles and Pauses

    function reset(){
        setCycles(0)
        setMins(25)
        setSecs(0)
        setIsRunning(false)
    }

    //If we use all out seconds, set to 59 and reduce the mins

    if(secs < 0){
        setSecs(59)
        setMins(mins - 1)
    }

    //If we are out of mins then initiate beep and begin the next cycle
    //Depending on cycle count, set time and begin running

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
        
    }

    //Countdown Tick-Tock
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
        {/* Ternary Operator Inserts Leading Zero For Timer */}
        <p color="dark" style={{ color: "black", fontSize: 90, fontWeight: 600, textAlign: "center"}}>{mins}:{secs < 10 ? "0": null}{secs} </p> 
        <button onClick={() => setIsRunning(false)}> Pause</button>
        <button onClick={() => setIsRunning(true)}> Play</button>
        <button onClick={() => reset()}> Reset</button>
        </>
    )

}

export default Timer