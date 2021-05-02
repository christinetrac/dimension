import React from 'react';
import styles from './missed-stream.module.css';

const PrevStream = (props) => {
    return (
        <div className={styles.container} style={{height:'273px'}}>
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
        </div>
    )
};

export {PrevStream};
