import React from "react";
import styles from "./navbar.module.css";
import {Link} from "react-router-dom";
import blob1 from '../assets/navbar-1.svg';
import blob2 from '../assets/navbar-2.svg';
import { MdDashboard } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { CgPlayListSearch } from "react-icons/cg";
import { FaCube } from "react-icons/fa";

const NavBar = (props) => {
    return (
        <div className={styles.nav}>
            <img src={blob1} className={styles.blob1} alt="blob1"/>
            <img src={blob2} className={styles.blob2} alt="blob2"/>
            <div className={styles.navTopContainer}>
                <Link to="/" className={styles.topLink}>
                    <MdDashboard className={styles.topIcon} style={{color: props.active === '/' ? '#7544FF' : '#363636'}}/>
                    <p style={{color: props.active === '/' ? '#7544FF' : '#363636'}}>
                        Dashboard
                    </p>
                </Link>
                <Link to="/your-courses" className={styles.topLink}>
                    <MdSchool className={styles.topIcon} style={{color: props.active === '/your-courses' ? '#7544FF' : '#363636'}}/>
                    <p style={{color: props.active === '/your-courses' ? '#7544FF' : '#363636'}}>
                        Your Courses
                    </p>
                </Link>
                <a href="http://34.66.210.81/" className={styles.topLink}>
                    <CgPlayListSearch className={styles.topIcon} style={{color: props.active === '/chat' ? '#7544FF' : '#363636', width:'28px', height:'28px'}}/>
                    <p style={{color: props.active === '/chat' ? '#7544FF' : '#363636'}}>
                        Chatty Chatter
                    </p>
                </a>
            </div>
            <div className={styles.navBottomContainer}>
                <div className={styles.bottomLink}>
                    <FaCube className={styles.dimensionIcon}/>
                    <p>
                        Your Dimensions
                    </p>
                </div>
                <p className={styles.dimensionLinks}>Pottery</p>
                <p className={styles.dimensionLinks}>Fitness</p>
                <p className={styles.dimensionLinks}>Origami</p>
            </div>
        </div>
    );
};
export { NavBar };
