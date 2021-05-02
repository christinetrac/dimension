import React from 'react';
import styles from './dimension-button.module.css';
import blob from '../assets/dimension-button.svg';

const DimensionButton = (props) => {
    return (
        <div className={styles.container}>
            <img src={blob} className={styles.image} alt=""/>
            <div className={styles.title}>{props.name}</div>
        </div>
    )
};

export {DimensionButton};
