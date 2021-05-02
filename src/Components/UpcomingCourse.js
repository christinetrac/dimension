import React from 'react';
import styles from './upcoming-course.module.css';
import { MdAddCircle } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";

const UpcomingCourse = (props) => {
    return (
        <div className={styles.container}>
            <MdAddCircle className={styles.add}/>
            <div className={styles.title}>{props.course.title}</div>
            <div className={styles.creator}>{props.course.description}</div>
            <div className={styles.date}>
                <IoIosCalendar className={styles.cal}/>
                {props.course.date}
            </div>
        </div>
    )
};

export {UpcomingCourse};
