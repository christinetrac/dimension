import React from 'react';
import styles from './your-courses.module.css';
import { NavBar } from "../Components/NavBar";

const YourCourses = (props) => {
    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <div className={styles.yourCourses}>
                hi im your courses page {props.location.pathname}
            </div>
        </div>
    );
};

export { YourCourses } ;
