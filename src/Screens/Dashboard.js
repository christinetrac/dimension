import React from 'react';
import styles from './dashboard.module.css';
import { NavBar } from "../Components/NavBar";
import { Header } from "../Components/Header";
import banner from "../assets/dashboard-banner.svg";
import { MdLiveTv } from "react-icons/md";

const Dashboard = (props) => {
    return (
        <div className={styles.main}>
            <NavBar active={props.location.pathname}/>
            <Header/>
            <div className={styles.dashboard}>
                <img src={banner} alt="" className={styles.banner}/>
                <div className={styles.bannerText}><span>dimension</span> brings courses to <span>life.</span></div>

                <div style={{marginLeft: '54px', marginTop:'-120px'}}>
                    <div className={styles.title}>
                        <MdLiveTv className={styles.titleIcon} style={{paddingTop: '6px'}}/>
                        <div className={styles.titleText}>Live Courses</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Dashboard } ;
