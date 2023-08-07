import React from 'react';
import { Button } from './Button';
import { db } from "../firebase";
import { doc, setDoc, increment } from "firebase/firestore";

export const Counter = ({label, style}) => {

    const docRef = doc(db, 'Values', label);

    return (
        <Button label={label} style={style} onClick={setDoc(docRef, { Value: increment(1) }, { merge: true})}/>
    )
   
}
