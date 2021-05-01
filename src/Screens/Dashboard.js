import React from 'react';
import styles from './dashboard.module.css';
import { NavBar } from "../Components/NavBar";
import { Header } from "../Components/Header";

const Dashboard = (props) => {
    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <Header/>
            <div className={styles.dashboard}>

            </div>
        </div>
    );
};

export { Dashboard } ;
