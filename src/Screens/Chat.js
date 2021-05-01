import React from 'react';
import styles from './dashboard.module.css';
import { NavBar } from "../Components/NavBar";

const Chat = (props) => {
    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <div className={styles.dashboard}>
                <span className={styles.font}>we can chat here orz</span>
                {props.location.pathname}
            </div>
        </div>
    );
};

export { Chat } ;
