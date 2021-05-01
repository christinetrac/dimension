import React from 'react';
import styles from './your-courses.module.css';
import { NavBar } from "../Components/NavBar";
import { Header } from "../Components/Header";

const YourCourses = (props) => {
    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <Header/>
            <div className={styles.yourCourses}>

            </div>
        </div>
    );
};

export { YourCourses } ;
