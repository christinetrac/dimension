import React from 'react';
import styles from './live-course.module.css';
import { MdRemoveRedEye } from "react-icons/md";
import { FaCube } from "react-icons/fa";
import {Link} from "react-router-dom";

const LiveCourse = (props) => {
    return (
        <Link className={styles.container} to="/live-stream">
            <img src={props.course.image} className={styles.image} alt=""/>
            <div className={styles.live}>●  live</div>
            <div className={styles.title}>{props.course.title}</div>
            <div className={styles.creator}>
                {props.course.creator}
                <span style={{marginLeft: '14px', marginBottom: '6px'}}>▪</span>
                <MdRemoveRedEye className={styles.eye}/>
                {props.course.views} viewers
            </div>
            <div className={styles.tag}>
                <FaCube className={styles.cube}/>
                <div className={styles.tagText}>{props.course.dimension}</div>
            </div>
        </Link>
    )
};

export {LiveCourse};
