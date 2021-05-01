import React from "react";
import styles from "./navbar.module.css";
import {Link} from "react-router-dom";
import blob1 from '../assets/navbar-1.svg';
import blob2 from '../assets/navbar-2.svg';
import { MdDashboard } from "react-icons/md";
import { MdSchool } from "react-icons/md";

const NavBar = (props) => {
    return (
        <div className={styles.nav}>
            <img src={blob1} className={styles.blob1} alt="blob1"/>
            <img src={blob2} className={styles.blob2} alt="blob2"/>
            <div className={styles.navTopContainer}>
                <Link to="/" className={styles.topLink}>
                    <MdDashboard className={styles.topIcon}/>
                    <p>
                        Dashboard
                    </p>
                </Link>
                <Link to="/your-courses" className={styles.topLink}>
                    <MdSchool className={styles.topIcon}/>
                    <p>
                        Your Courses
                    </p>
                </Link>
                <Link to="/chat" className={styles.topLink}>
                    <p>
                        Chatty Chatter
                    </p>
                </Link>
            </div>
        </div>
    );
};
export { NavBar };
