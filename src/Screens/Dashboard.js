import React from 'react';
import styles from './dashboard.module.css';
import { NavBar } from "../Components/NavBar";

const Dashboard = (props) => {
    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <div className={styles.dashboard}>
                <span className={styles.font}>hi im the dashboard page</span>
                {props.location.pathname}
            </div>
        </div>
    );
};

export { Dashboard } ;
