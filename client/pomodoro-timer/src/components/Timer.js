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

function Timer(props){

    //Audio Clip
    const alarm_sound = new Howl({ src: ["./sounds/pomodoro_alarm.mp3"] });

    //State Variables

    const [mins, setMins] = useState(25);
    const [secs, setSecs] = useState(0);
    const [isRunning, setIsRunning] = useState(false)
    const [cycles, setCycles] = useState(0)
    const [cardColor, setCardColor] = useState("medium")
    

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
        alarm_sound.pause()
        alarm_sound.play();
        setCycles(cycles + 1)
        if (cycles % 2 == 0){
            setMins(5)
            setSecs(0)
            setIsRunning(true)
            // updateColor()
        }
        if (cycles % 4 == 0 && cycles != 0){
            setMins(15)
            setSecs(0)
            setIsRunning(true)
            // updateColor()
        }
        else{
            setIsRunning(true)
            // updateColor()
        }
        
    }

    //Card Color Management
    // function updateColor(){
    //     //isRunning Check
    //     console.log(cycles)
    //     if(cycles % 2 == 0){
    //         setCardColor("primary")
    //     }else{    
    //         setCardColor("danger")
    //     }
        
    // }

    function playPause(){
        setIsRunning(!isRunning)
        //updateColor();
    }

    //Countdown Tick-Tock
    useEffect(() => {
        if (isRunning){
            const id = window.setInterval(()=>{
            setCardColor("danger")
            setSecs(secs => secs - 1)
        }, 1000);
            return () => {window.clearInterval(id); setCardColor("medium")};
        }
    }, [isRunning]);

    return(
        <>
        {/* Ternary Operator Inserts Leading Zero For Timer */}
        <IonCard color={cardColor}>
            <IonCardTitle>
              <p color="dark" style={{ color: "black", fontSize: 20, fontWeight: 600, textAlign: "center"}}>Timer: Cycles: {cycles}</p>
            </IonCardTitle>
            <IonCardContent>
                <p color="dark" style={{ color: "black", fontSize: 90, fontWeight: 600, textAlign: "center", paddingBottom:50}}>{mins}:{secs < 10 ? "0": null}{secs} </p> 
                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonRow>
                        <IonCol>
                            <IonFabButton color="dark"  onClick={() => playPause()}>
                                <IonIcon icon={!isRunning ? playOutline :  pauseOutline}/>
                            </IonFabButton>
                        </IonCol>
                        <IonCol>
                            <IonFabButton color="dark"  onClick={() => reset()}>
                                <IonIcon icon={refreshOutline}/>
                            </IonFabButton>
                        </IonCol>
                    </IonRow>
                </IonFab>
            </IonCardContent>
        </IonCard>
        </>
    )

}

export default Timer