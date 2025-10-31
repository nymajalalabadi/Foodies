"use client";

import classes from './image-picker.module.css';
import { useRef } from 'react';

export default function ImagePicker({label, name}) {

    const imageInput = useRef(null);

    const handleImagePick = () => {
        imageInput.current.click();
    };

  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <input className={classes.input} type="file" accept="image/png, image/jpeg" id={name} name={name} ref={imageInput} />
            <button className={classes.button} type="button" onClick={handleImagePick}>Pick an image</button>
        </div>
    </div>
  );
}