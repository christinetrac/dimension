import React from 'react';
import styles from './upcoming-stream.module.css';
import { FaCube } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";

const UpcomingStream = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.course.image} className={styles.image} alt=""/>
            <MdAddCircle className={styles.add}/>
            <div className={styles.title}>{props.course.title}</div>
            <div className={styles.creator}>
                {props.course.creator}
            </div>
            <div className={styles.date}>
                <IoIosCalendar className={styles.cal}/>
                {props.course.date}
            </div>
            <div className={styles.tag}>
                <FaCube className={styles.cube}/>
                <div className={styles.tagText}>{props.course.dimension}</div>
            </div>
        </div>
    )
};

export {UpcomingStream};
