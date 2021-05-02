import React from 'react';
import styles from './subscribed-channels.module.css';
import { FaCube } from "react-icons/fa";

const SubscribedChannels = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.course.image} className={styles.image} alt=""/>
            <div className={styles.title}>{props.course.creator}</div>
            <div className={styles.creator}>
                {props.course.live}
            </div>
            <div className={styles.tag}>
                <FaCube className={styles.cube}/>
                <div className={styles.tagText}>{props.course.dimension}</div>
            </div>
        </div>
    )
};

export {SubscribedChannels};
