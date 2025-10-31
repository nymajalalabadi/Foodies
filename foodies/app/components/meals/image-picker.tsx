"use client";

import classes from './image-picker.module.css';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({label, name}: {label: string, name: string}) {
    const [pickedImage, setPickedImage] = useState(null);

    const imageInput = useRef(null);

    const handleImagePick = () => {
        imageInput.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    };

  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>Please pick an image.</p>}
                {pickedImage && <Image src={pickedImage} alt="Picked image" fill />}
            </div>
            <input className={classes.input} type="file" accept="image/png, image/jpeg" id={name} name={name} ref={imageInput} onChange={handleImageChange} required />
            <button className={classes.button} type="button" onClick={handleImagePick}>Pick an image</button>
        </div>
    </div>
  );
}