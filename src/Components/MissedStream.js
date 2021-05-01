import React from 'react';
import styles from './missed-stream.module.css';
import { FaCube } from "react-icons/fa";

const MissedStream = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.course.image} className={styles.image} alt=""/>
            <div className={styles.live}>{props.course.duration}</div>
            <div className={styles.title}>{props.course.title}</div>
            <div className={styles.creator}>
                {props.course.creator}
            </div>
            <div className={styles.time}>
                {props.course.views} views
                <span style={{marginLeft: '10px', marginRight:'10px', marginBottom: '6px'}}>▪</span>
                {props.course.time_ago}
            </div>
            <div className={styles.tag}>
                <FaCube className={styles.cube}/>
                <div className={styles.tagText}>{props.course.dimension}</div>
            </div>
        </div>
    )
};

export {MissedStream};
